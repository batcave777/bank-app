import { useEffect } from 'react';
import { Navbar, Balance, Filter, NewTransactionForm, TransactionsList, Footer } from '..';
import { GlobalStyle, AppContainer, SiteHeader, MainContent, ControlsSection, ColumnsWrapper, Column, TransactionsSection, SiteFooter } from './styled';
import { useTransactionStore } from '../../store';

export const App = () => {
  const fetchTransactions = useTransactionStore((state) => state.fetchTransactions);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SiteHeader>
          <Navbar />
        </SiteHeader>
        <MainContent>
          <ControlsSection aria-labelledby="controls-heading">
            <ColumnsWrapper>
              <Column>
                <Balance />
                <Filter />
              </Column>
              <Column>
                <NewTransactionForm />
              </Column>
            </ColumnsWrapper>
          </ControlsSection>
          <TransactionsSection aria-labelledby="transactions-heading">
            <TransactionsList />
          </TransactionsSection>
        </MainContent>
        <SiteFooter>
          <Footer />
        </SiteFooter>
      </AppContainer>
    </>
  );
}