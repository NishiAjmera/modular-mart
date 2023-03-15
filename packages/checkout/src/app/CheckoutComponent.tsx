import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CheckoutProps {
  products: Product[];
}

const Checkout: React.FC<CheckoutProps> = ({ products }) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = (): void => {
    const newTotal = products.reduce((acc, product) => acc + product.price, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={calculateTotal}>Calculate Total</button>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Checkout;