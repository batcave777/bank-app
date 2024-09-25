import styled from 'styled-components';
import { theme } from '../../constants';

export const ListContainer = styled.section`
  max-height: 500px;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${theme.surface};
  overflow-y: auto;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;