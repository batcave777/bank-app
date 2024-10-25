import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchTransactions as apiFetchTransactions } from '../api/transactions';

export type Transaction = {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
};

export type TransactionsStoreState = {
  transactions: Transaction[];
  filterValue: string;
  fetchTransactions: () => Promise<void>;
  removeTransaction: (id: number) => void;
  setFilterValue: (value: string) => void;
  addTransaction: (transaction: Transaction) => void;
};

export const useTransactionStore = create<TransactionsStoreState>()(
  devtools(
    (set): TransactionsStoreState => ({
      transactions: [] as Transaction[],
      filterValue: '',
      fetchTransactions: async () => {
        try {
          const transactions = await apiFetchTransactions();
          set({ transactions });
        } catch (error) {
          console.error('Error fetching transactions:', error);
          throw error;
        }
      },
      removeTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== id
          ),
        }));
      },
      setFilterValue: (value) => set({ filterValue: value }),
      addTransaction: (transaction) => {
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        }));
      },
    })
  )
);
