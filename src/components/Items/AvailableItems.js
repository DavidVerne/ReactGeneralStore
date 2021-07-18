import React from 'react';
import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import ShoppingItem from './ShoppingItem/ShoppingItem';

{/* dummy data */}

const DUMMY_ITEMS = [
    {
      id: 'm1',
      name: 'Apples',
      description: 'per bag',
      price: 1.00,
      discount: 0.10,
    },
    {
      id: 'm2',
      name: 'Bread',
      description: 'per loaf',
      price: 0.80,
      discount: 0,
    },
    {
      id: 'm3',
      name: 'Milk',
      description: 'per 500ml',
      price: 1.30,
      discount: 0,
    },
    {
      id: 'm4',
      name: 'Soup',
      description: 'per tin',
      price: 0.65,
      discount: 0,
    },
  ];

const AvailableItems = () => { 
  const itemsList = DUMMY_ITEMS.map(item => 
  <ShoppingItem 
  id={item.id} 
  key={item.id} 
  name={item.name} 
  description={item.description} 
  price={item.price}
  discount={item.discount}
  />); {/* converting dummy data into jsx elements */}

  return <section className={classes.items}>
      <Card>
      <ul>
          {itemsList}
      </ul>
      </Card>
  </section>
}

export default AvailableItems;