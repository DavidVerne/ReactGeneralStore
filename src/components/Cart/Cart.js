import { useState, useEffect, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Discount from './Discount';

const Cart = props => {

    const cartCtx = useContext(CartContext);
    
    let finalAmount = cartCtx.totalAmount.toFixed(2);

    const [finalAmountState, setFinalAmount] = useState(finalAmount); // set finalAmountState to finalAmount as a starting value

    const [discountToken, applyDiscountToken] = useState(true); // apply discount only once 

      const ApplyDiscount = () => {
          if (discountToken) {
            setFinalAmount((finalAmountState - 0.50).toFixed(2));
          };
          applyDiscountToken(false);
      }

    const hasItems = cartCtx.items.length > 0;

    const CartItems = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map((item) => (
                    <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price}
                    discount={item.discount}
                    />
                ))
            }
        </ul>
    );

    const Discounts = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map((item) => (

                       <Discount 
                        key={item.id} 
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price}
                        discount={item.discount}
                        />
                ))
            }
        </ul>
    );

    const NoDiscounts = (
        <ul className={classes['cart-items']}>
            <li className={classes['d-cart-item']}>
                <div className={classes['d-cart-box']}>
                    <div className={classes.summarybox}>
                    <span className={classes.discountedTotal}>{'(No offers available)'}</span>
                    </div>
                </div>
            </li>
        </ul>
    );

    console.log('cartCtx.items: ', cartCtx.items);

    const CheckForDiscounts = () => {
        console.log("Checking for discounts");
        for (let i = 0; i < cartCtx.items.length; i++)
        {
            if (cartCtx.items[i].discount != 0) {
                return true;
            }

        }
        return false;
    }; 


    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            {CheckForDiscounts() ? <div>{Discounts}</div> : <div>{NoDiscounts}</div>}
            <div className={classes.voucher}>
            {hasItems && <button className={classes['discountVoucher']} onClick={ApplyDiscount}>Apply Discount Token</button>}
            </div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>£{finalAmountState}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Buy</button>}
            </div>
        </Modal>
    );
};

export default Cart;