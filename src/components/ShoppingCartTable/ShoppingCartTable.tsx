import React from 'react';
import { StyledCartTableContainer, TableButton, Total } from './styled';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemoveFromCart
} from '../../actions'
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }: any) => {

  const renderRow = (item: any, index: any) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <TableButton
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </TableButton>
          <TableButton
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </TableButton>
          <TableButton
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </TableButton>
        </td>
      </tr>
    )
  }

  return (
    <StyledCartTableContainer className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <Total className="total">
        Total: ${total}
      </Total>
    </StyledCartTableContainer>
  )
}

const mapStateToProps = ({ cartItems, orderTotal }: any) => {
  return {
    items: cartItems,
    total: orderTotal
  };
}
const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);