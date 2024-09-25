import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormField } from '..';
import { useTransactionStore } from '../../store';
import { FormContainer, SuccessMessage, ErrorMessage } from './styled';

const transactionSchema = z.object({
  amount: z.number({ invalid_type_error: 'Amount is required' })
    .positive('Amount must be positive'),
  account: z.string()
    .min(1, 'Account number is required')
    .regex(/^\d+$/, 'Account number must contain only numbers'),
  address: z.string().min(1, 'Address is required'),
  description: z.string().min(1, 'Description is required'),
  beneficiary: z.string().min(1, 'Beneficiary is required'),
});

type TransactionFormData = z.infer<typeof transactionSchema>;

export const NewTransactionForm: React.FC = () => {
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const transactions = useTransactionStore((state) => state.transactions);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
  });

  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (submissionStatus === 'success') {
      timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submissionStatus]);

  const onSubmit = async (data: TransactionFormData) => {
    try {
      // Calculate the next ID
      const transactionIds = transactions.map((transaction) => transaction.id);
      const maxId = transactionIds.length > 0 ? Math.max(...transactionIds) : -1;
      const newId = maxId + 1;

      const newTransaction = {
        ...data,
        id: newId,
        date: new Date().toISOString(),
      };
      addTransaction(newTransaction);
      reset();
      setSubmissionStatus('success');
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} aria-labelledby="form-title">
      <h2 id="form-title">New Transaction</h2>

      <FormField
        label="Amount"
        type="number"
        placeholder="Enter amount"
        ariaLabel="Transaction amount"
        registration={register('amount', { valueAsNumber: true })}
        error={errors.amount}
      />

      <FormField
        label="Account"
        type="text"
        placeholder="Enter account number"
        ariaLabel="Account"
        registration={register('account')}
        error={errors.account}
      />

      <FormField
        label="Address"
        type="text"
        placeholder="Enter address"
        ariaLabel="Address"
        registration={register('address')}
        error={errors.address}
      />

      <FormField
        label="Description"
        type="text"
        placeholder="Enter description"
        ariaLabel="Transaction description"
        registration={register('description')}
        error={errors.description}
      />

      <FormField
        label="Beneficiary"
        type="text"
        placeholder="Enter beneficiary"
        ariaLabel="Beneficiary"
        registration={register('beneficiary')}
        error={errors.beneficiary}
      />

      <Button
        type="submit"
        $variant="primary"
        size="large"
        aria-label="Add transaction"
      >
        Add Transaction
      </Button>

      {submissionStatus === 'success' && (
        <SuccessMessage role="alert">Transaction added successfully!</SuccessMessage>
      )}
      {submissionStatus === 'error' && (
        <ErrorMessage role="alert">An error occurred. Please try again.</ErrorMessage>
      )}
    </FormContainer>
  );
};