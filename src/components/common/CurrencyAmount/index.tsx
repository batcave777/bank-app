import React from 'react';
import { CURRENCY } from '../../../constants';
import { StyledCurrencyAmount } from './styled';

type CurrencyAmountProps = React.HTMLAttributes<HTMLElement> & {
  amount: number;
  className?: string;
  ariaLabel?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const CurrencyAmount: React.FC<CurrencyAmountProps> = ({
  amount,
  className,
  ariaLabel,
  as: Component = 'span',
  ...props
}) => {
  const isPositive = amount >= 0;
  const formattedAmount = `${amount.toFixed(2)} ${CURRENCY.PLN}`;
  const label =
    ariaLabel ||
    `${isPositive ? 'Pozytywna' : 'Negatywna'} kwota ${formattedAmount}`;

  return (
    <StyledCurrencyAmount
      as={Component}
      className={className}
      $amount={amount}
      aria-label={label}
      {...props}
    >
      {formattedAmount}
    </StyledCurrencyAmount>
  );
};