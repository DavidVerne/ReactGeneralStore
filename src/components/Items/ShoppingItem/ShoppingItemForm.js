import classes from './ShoppingItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const ShoppingItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true); 

    const amountInputRef = useRef();

    // function for sending form data 
    const submitHandler = event => {
            event.preventDefault();

            const enteredAmount = amountInputRef.current.value; // value is always a string
            const enteredAmountNumber = +enteredAmount; // converts string to number

            if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) { // validation
                setAmountIsValid(false);
                return;
            }

            props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}
        label="Amount" 
        input={{ 
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '1',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default ShoppingItemForm;