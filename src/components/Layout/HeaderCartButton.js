import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext); // updates everytime CartContext updates

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0); // reduce transforms array into single number

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
        {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;