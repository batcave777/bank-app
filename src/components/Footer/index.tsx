import React from 'react';
import { FooterContainer, CopyrightText } from './styled';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <CopyrightText>
        &copy; {currentYear} Bank App by Marcin Groszkiewicz
      </CopyrightText>
    </FooterContainer>
  );
};