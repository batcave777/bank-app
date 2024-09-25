import styled from "styled-components";
import { theme } from "../../constants";

export const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: ${theme.textPrimary};
  background-color: ${theme.surface};

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
`;