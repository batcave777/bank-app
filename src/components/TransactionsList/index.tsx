import React, { useCallback, useEffect, useState } from 'react';
import { TransactionItem } from '..';
import { useTransactionStore } from '../../store';
import { Transaction } from '../../store/useTransactionsStore';
import { useInfiniteScroll } from '../../hooks';
import { ListContainer, List } from './styled';

export const TransactionsList: React.FC = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const removeTransaction = useTransactionStore((state) => state.removeTransaction);
  const filterValue = useTransactionStore((state) => state.filterValue);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  // State variable to track how many transactions are displayed
  const [displayCount, setDisplayCount] = useState(10);

  const loadMore = useCallback(() => {
    setDisplayCount((prevCount: number) => {
      if (prevCount >= filteredTransactions.length) {
        return prevCount;
      }
      return Math.min(prevCount + 10, filteredTransactions.length);
    });
  }, [filteredTransactions.length]);

  const listContainerRef = useInfiniteScroll(loadMore);

  // Reset displayCount when filterValue changes
  useEffect(() => {
    setDisplayCount(10);
  }, [filterValue]);

  useEffect(() => {
    const query = filterValue.trim().toLowerCase();
    if (!query) {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter((transaction) =>
        transaction.beneficiary.toLowerCase().includes(query)
      );
      setFilteredTransactions(filtered);
    }
  }, [transactions, filterValue]);

  return (
    <ListContainer ref={listContainerRef} aria-labelledby="transactions-title">
      <h2 id="transactions-title">Transactions List</h2>
      {filteredTransactions.length > 0 ? (
        <List>
          {filteredTransactions.slice(0, displayCount).map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={removeTransaction}
            />
          ))}
        </List>
      ) : (
        <p>No transactions to display.</p>
      )}
    </ListContainer>
  );
};