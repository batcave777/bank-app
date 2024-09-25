import styled from "styled-components";
import { theme } from "../../constants";

export const BalanceContainer = styled.section`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${theme.surface};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const BalanceHeading = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${theme.textPrimary};
`;