import React, { Fragment } from "react";
import shoppingImage from '../../assets/shopping.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment> 
        <header className={classes.header}> 
            <h1>General Store</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={shoppingImage} alt="a shopping cart" />
        </div>
    </Fragment>
};

export default Header;