import React, { useRef, useState } from 'react';
import { useTransactionStore } from '../../store';
import { FilterContainer, InputWrapper, Label, Input } from './styled';

export const Filter: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setFilterValue = useTransactionStore((state) => state.setFilterValue);
  const timeoutRef = useRef<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Clear any existing timeout to prevent multiple timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Use a timeout to prevent the function from being called too often in case of large data set
    timeoutRef.current = window.setTimeout(() => {
      setFilterValue(value);
    }, 200);
  };

  return (
    <FilterContainer>
      <InputWrapper>
        <Label htmlFor="beneficiary-filter">Filter by beneficiary</Label>
        <Input
          id="beneficiary-filter"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter beneficiary name"
          aria-label="Enter beneficiary name to filter transactions"
        />
      </InputWrapper>
    </FilterContainer>
  );
};