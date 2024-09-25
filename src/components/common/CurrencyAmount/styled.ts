import styled from 'styled-components';
import { theme } from '../../../constants';

export const StyledCurrencyAmount = styled.span<{ $amount: number }>`
  font-weight: bold;
  color: ${({ $amount }) => ($amount >= 0 ? theme.positive : theme.negative)};
`;