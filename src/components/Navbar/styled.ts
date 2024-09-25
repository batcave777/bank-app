import styled from "styled-components";
import { theme } from "../../constants";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${theme.textPrimary};
  background-color: ${theme.surface};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: ${theme.textPrimary};

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;