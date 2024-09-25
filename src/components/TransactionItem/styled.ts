import styled, { keyframes } from 'styled-components';
import { theme } from '../../constants';

export const deleteAnimation = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0) translateY(-50px);
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${theme.border};

  &:last-child {
    border-bottom: none;
  }

  &.deleting {
    animation: ${deleteAnimation} 0.5s forwards;
  }
`;

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Description = styled.p`
  margin: 0;
  padding-right: 0.7rem;
  font-weight: 500;
  color: ${theme.textPrimary};
`;

export const Details = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.15rem;
  color: ${theme.textSecondary};
`;