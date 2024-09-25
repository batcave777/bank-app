import styled from "styled-components";
import { theme } from "../../constants";

export const FilterContainer = styled.section`
  padding: 1rem;
  border-radius: 5px;
  background-color: ${theme.surface};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${theme.border};
  border-radius: 4px;
  color: ${theme.textPrimary};
  background-color: ${theme.background};

  &:focus {
    border-color: ${theme.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.primaryVariant};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.textSecondary};
`;