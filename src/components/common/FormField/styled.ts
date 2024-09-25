import styled from 'styled-components';
import { theme } from '../../../constants';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.25rem;
  color: ${theme.textSecondary};
`;

export const Input = styled.input<{ $hasError: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${({ $hasError }) => ($hasError ? theme.error : theme.border)};
  border-radius: 4px;
  color: ${theme.textPrimary};
  background-color: ${theme.background};

  &:focus {
    border-color: ${theme.primary};
    outline: none;
    box-shadow: 0 0 0 2px ${theme.primaryVariant};
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${theme.error};
`;