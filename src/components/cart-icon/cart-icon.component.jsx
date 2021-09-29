import React from 'react';
 import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

 import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// import {
//   CartContainer,
//   ShoppingIcon,
//   ItemCountContainer
// } from './cart-icon.styles';
 import {ReactComponent as ShoppingIcon} from '../../assets/sb.svg';
import './cart-icon.styles.scss'
// const CartIcon = ({ toggleCartHidden, itemCount }) => (
//   <CartContainer onClick={toggleCartHidden}>
//     <ShoppingIcon />
//     <ItemCountContainer>{itemCount}</ItemCountContainer>
//   </CartContainer>
// );

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);



const CartIcon = ({toggleCartHidden}) =>(
  <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon); 