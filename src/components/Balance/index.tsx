import React from 'react';
import { CurrencyAmount } from '..';
import { useTransactionStore } from '../../store';
import { BalanceContainer, BalanceHeading } from './styled';

export const Balance: React.FC = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const filterValue = useTransactionStore((state) => state.filterValue);

  const filteredTransactions = transactions.filter(transaction => 
    transaction.beneficiary.toLowerCase().includes(filterValue.toLowerCase())
  );

  const balance = filteredTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <BalanceContainer>
      <BalanceHeading>
        Balance: {' '}
        <CurrencyAmount amount={balance} />
      </BalanceHeading>
    </BalanceContainer>
  );
};