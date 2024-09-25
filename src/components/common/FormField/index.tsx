import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, InputLabel, Input, ErrorMessage } from './styled';

type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  ariaLabel,
  registration,
  error,
  ...rest
}) => (
  <FieldWrapper>
    <InputLabel>{label}</InputLabel>
    <Input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      $hasError={!!error}
      {...registration}
      {...rest}
    />
    {error && <ErrorMessage role="alert">{error.message}</ErrorMessage>}
  </FieldWrapper>
);