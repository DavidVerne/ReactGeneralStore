import React from 'react';

{/* used for managing cart state */}

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
});

export default CartContext;