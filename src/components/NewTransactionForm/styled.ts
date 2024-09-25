import styled from 'styled-components';
import { theme } from '../../constants';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${theme.surface};
`;

export const SuccessMessage = styled.p`
  margin-top: 0.5rem;
  color: ${theme.secondary};
  font-size: 1rem;
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  color: ${theme.error};
  font-size: 1rem;
`;