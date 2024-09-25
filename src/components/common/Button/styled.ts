import styled, { css } from 'styled-components';
import { theme } from '../../../constants';

export type ButtonProps = {
  $variant?: 'primary' | 'danger';
  size?: 'default' | 'large';
  $fullWidth?: boolean;
};

const variantStyles = {
  primary: css`
    color: ${theme.textPrimary};
    background-color: ${theme.primary};

    &:hover,
    &:focus {
      background-color: ${theme.primaryVariant};
      outline: none;
    }

    &:disabled {
      background-color: ${theme.border};
      cursor: not-allowed;
    }
  `,
  danger: css`
    background-color: ${theme.negative};
    color: ${theme.textPrimary};

    &:hover,
    &:focus {
      background-color: ${theme.negativeHover};
      outline: 2px solid ${theme.negativeOutline};
    }
  `,
};

const sizeStyles = {
  default: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  text-align: center;
  cursor: pointer;

  ${({ size = 'default' }) => sizeStyles[size]}
  ${({ $variant = 'primary' }) => variantStyles[$variant]}
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
`;