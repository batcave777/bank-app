import React from 'react';
import { NavbarContainer, Title } from './styled';

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer role="navigation" aria-label="Main Navigation">
      <Title>Bank Transactions</Title>
    </NavbarContainer>
  );
};