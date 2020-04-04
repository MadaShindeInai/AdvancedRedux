import React from 'react';
import { StyledCartTableContainer, TableButton, Total } from './styled';

const ShoppingCartTable = () => {
  return (
    <StyledCartTableContainer className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <TableButton className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </TableButton>
              <TableButton className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </TableButton>
              <TableButton className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </TableButton>
            </td>
          </tr>
        </tbody>
      </table>

      <Total className="total">
        Total: $201
      </Total>
    </StyledCartTableContainer>
  )
}

export default ShoppingCartTable;