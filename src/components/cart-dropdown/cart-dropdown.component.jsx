import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { withRouter } from 'react-router-dom';

// import CartItem from '../cart-item/cart-item.component';
// import { selectCartItems } from '../../redux/cart/cart.selectors';
// import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

// import {
//   CartDropdownContainer,
//   CartDropdownButton,
//   EmptyMessageContainer,
//   CartItemsContainer
// } from './cart-dropdown.styles';
import './cart-dropdown.styles.scss';

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//   <CartDropdownContainer>
//     <CartItemsContainer>
//       {cartItems.length ? (
//         cartItems.map(cartItem => (
//           <CartItem key={cartItem.id} item={cartItem} />
//         ))
//       ) : (
//         <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
//       )}
//     </CartItemsContainer>
//     <CartDropdownButton
//       onClick={() => {
//         history.push('/checkout');
//         dispatch(toggleCartHidden());
//       }}
//     >
//       GO TO CHECKOUT
//     </CartDropdownButton>
//   </CartDropdownContainer>
// );

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });
const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)
export default CartDropdown;
