import CartContext from './CartContext';
import { useReducer } from 'react'; 

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

{/* recieves state and action */}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const updatedTotalAmount = state.totalAmount + (action.item.price - (action.item.discount * action.item.amount)) * action.item.amount;
        
        {/* check if item already in cart */}
        const exisitingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[exisitingCartItemIndex]; {/* existing item set to item in array */}
        
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[exisitingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }; {/* return new state snapshot */}
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); {/* set initial state */} 

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;