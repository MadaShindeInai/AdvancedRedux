import React from 'react';
import { IHeaderProps } from '../../interfaces';
import { StyledHeader, StyledHeaderA } from './styled';

const Header = ({ numItems, total }: IHeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderA href="#" target="_blank" rel="noopener noreferrer">Advanced Redux</StyledHeaderA>
      <StyledHeaderA href="#" target="_blank" rel="noopener noreferrer" border="5px solid #163628">
        {numItems} items in cart (${total})
      </StyledHeaderA>
    </StyledHeader>
  )
}

export default Header;