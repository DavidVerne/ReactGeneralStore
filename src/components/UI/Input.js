import React from 'react';
import classes from './Input.module.css';

// wrapping entire component in a ref
const Input = React.forwardRef((props, ref) => { {/* component is now an argument for forwardRef / ref added as second paramenter */}
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} /> {/* ... ensures all key/value pairs in this object are added as props to input*/}
    </div>
});

export default Input;