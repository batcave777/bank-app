import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../constants';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.background};
    color: ${theme.textPrimary};
    margin: 0;
    font-family: Calibri, sans-serif;
  }

  h1, h2, h3 {
    color: ${theme.textPrimary};
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SiteHeader = styled.header`
  background-color: ${theme.surface};
  padding: 1rem;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;
  background-color: ${theme.background};
  margin: 0 auto;
  overflow-x: hidden;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 1100px;
  }

  @media (min-width: 769px) and (max-width: 1199px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const ControlsSection = styled.section`
  margin-bottom: 1rem;
`;

export const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  background-color: ${theme.surface};
  padding: 1rem;
  border-radius: 5px;
  flex-grow: 1;

  @media (min-width: 769px) {
    min-width: 300px;
    max-width: 600px;
  }
`;

export const TransactionsSection = styled.section`
  background-color: ${theme.surface};
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const SiteFooter = styled.footer`
  background-color: ${theme.surface};
  padding: 1rem;
  text-align: center;
`;