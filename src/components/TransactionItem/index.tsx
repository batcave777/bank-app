import React, { useState } from 'react';
import { Button, CurrencyAmount } from '..';
import { Transaction } from '../../store/useTransactionsStore';
import { ListItem, TransactionInfo, Details, Description } from './styled';

type TransactionItemProps = {
  transaction: Transaction;
  onDelete: (transactionId: number) => void;
};

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRemove = () => {
    setIsDeleting(true);
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLLIElement>) => {
    if (event.target === event.currentTarget) {
      onDelete(transaction.id);
    }
  };

  return (
    <ListItem
      className={isDeleting ? 'deleting' : ''}
      onAnimationEnd={handleAnimationEnd}
    >
      <TransactionInfo>
        <Details>
          Beneficiary: {transaction.beneficiary} <br />
          Account: {transaction.account} <br />
          Date: {new Date(transaction.date).toLocaleDateString()} <br />
          Address: {transaction.address}
        </Details>
        <Description>{transaction.description}</Description>
        <CurrencyAmount amount={transaction.amount} />
      </TransactionInfo>
      <Button
        $variant="danger"
        aria-label={`Remove transaction: ${transaction.description}`}
        onClick={handleRemove}        
      >
        Remove
      </Button>
    </ListItem>
  );
};