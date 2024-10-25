import React, { useCallback, useEffect, useState } from 'react';
import { Button, TransactionItem } from '..';
import { useInfiniteScroll } from '../../hooks';
import { useTransactionStore } from '../../store';
import { Transaction } from '../../store/useTransactionsStore';
import { List, ListContainer } from './styled';

export const TransactionsList: React.FC = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  const fetchTransactions = useTransactionStore(
    (state) => state.fetchTransactions
  );
  const removeTransaction = useTransactionStore(
    (state) => state.removeTransaction
  );
  const filterValue = useTransactionStore((state) => state.filterValue);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
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

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await fetchTransactions();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load transactions'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, [fetchTransactions]);

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

  if (isLoading) {
    return (
      <ListContainer>
        <h2 id="transactions-title">Transactions List</h2>
        <p>Loading transactions...</p>
      </ListContainer>
    );
  }

  if (error) {
    return (
      <ListContainer>
        <h2 id="transactions-title">Transactions List</h2>
        <p>Error: {error}</p>
        <Button
          type="submit"
          $variant="primary"
          size="large"
          aria-label="Add transaction"
          onClick={() => fetchTransactions()}
        >
          Retry
        </Button>
      </ListContainer>
    );
  }

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
