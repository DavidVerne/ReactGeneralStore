import classes from './Discount.module.css';

const Discount= (props) => {

  let discountTotal;

  if (props.discount !== 0) {
    discountTotal = `${props.name} ${(props.discount) * 100}% off: - £${(props.discount * props.amount).toFixed(2)}`;
  } 


  return (
    <li className={classes['d-cart-item']}>
      <div className={classes['d-cart-box']}>
        <div className={classes.summarybox}>
          <span className={classes.discountedTotal}>{discountTotal}</span>
        </div>
      </div>
    </li>
  );
};

export default Discount;