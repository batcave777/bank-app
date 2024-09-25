import React from 'react';
import { StyledButton, ButtonProps } from './styled';

type ButtonComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonComponentProps> = ({
  $variant = 'primary',
  size = 'default',
  $fullWidth = false,
  children,
  ...props
}) => {
  return (
    <StyledButton
      $variant={$variant}
      size={size}
      $fullWidth={$fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};