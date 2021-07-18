import { useContext } from 'react';
import classes from './ShoppingItem.module.css';
import ShoppingItemForm from './ShoppingItemForm';
import CartContext from '../../../store/CartContext';

const ShoppingItem = props => {
    const cartCx = useContext(CartContext);
    const price = `£${props.price.toFixed(2)}`; 

    const addItemToCartHandler = amount => {
        cartCx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            discount: props.discount,
            totalPrice: props.totalPrice,
        });
    };

    return (
    <li className={classes.grocery}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <ShoppingItemForm id={props.id}  onAddToCart={addItemToCartHandler} />
        </div>
    </li>
    );
};

export default ShoppingItem;