import styled from 'styled-components';
import { IHeaderA } from '../../interfaces';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  padding: 20px 120px;
`
export const StyledHeaderA = styled.a`
  text-decoration: none;  
  font-size: 25px;
  font-weight: bold;
  color: deepblue;
  border: ${({ border }: IHeaderA) => border || '0'};
`