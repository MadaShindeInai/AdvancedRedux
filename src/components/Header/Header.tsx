import React from 'react';
import { IHeaderProps } from '../../interfaces';
import { StyledHeader, StyledHeaderLink } from './styled';

const Header = ({ numItems, total }: IHeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderLink to="/">Advanced Redux</StyledHeaderLink>
      <StyledHeaderLink to="/cart" border="5px solid #163628">
        {numItems} items in cart (${total})
      </StyledHeaderLink>
    </StyledHeader>
  )
}

export default Header;