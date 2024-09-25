import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Transaction = {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export type TransactionsStoreState = {
  transactions: Transaction[];
  filterValue: string;
  fetchTransactions: () => Promise<void>;
  removeTransaction: (id: number) => void;
  setFilterValue: (value: string) => void;
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionStore = create<TransactionsStoreState>()(
  devtools((set) => ({
    transactions: [],
    filterValue: '',
    fetchTransactions: async () => {
      try {
        const response = await fetch('/transactions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const transactions = await response.json();
        set({ transactions });
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    },
    removeTransaction: (id) => {
      set((state) => ({
        transactions: state.transactions.filter((transaction) => transaction.id !== id),
      }));
    },
    setFilterValue: (value) => set({ filterValue: value }),
    addTransaction: (transaction) => {
      set((state) => ({
        transactions: [transaction, ...state.transactions],
      }));
    },
  }))
);