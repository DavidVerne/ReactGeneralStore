import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `Subtotal: £${(props.price * props.amount).toFixed(2)}`;
  let discountTotal;
  let totalCost;

  if (props.discount !== 0) {
    discountTotal = `${props.name} ${(props.discount) * 100}% off: - £${(props.discount * props.amount).toFixed(2)}`;
    totalCost = `Total price: £${((props.price * props.amount) - (props.discount * props.amount)).toFixed(2)}`;
  } else {
    discountTotal = '(No offers available)';
    totalCost = `Total price: £${(props.price * props.amount).toFixed(2)}`;
  }


  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-box']}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
        <div className={classes.summarybox}>
          <span className={classes.price}>{price}</span>
          <span className={classes.discountedTotal}>{discountTotal}</span>
          <span className={classes.totalCost}>{totalCost}</span>
        </div>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
