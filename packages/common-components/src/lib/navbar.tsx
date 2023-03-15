import React from 'react';

type NavProps = {
  productListLink: string;
  checkoutLink: string;
};

export const Navbar: React.FC<NavProps> = ({ productListLink, checkoutLink }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href={productListLink}>Product List</a>
        </li>
        <li>
          <a href={checkoutLink}>Checkout</a>
        </li>
      </ul>
    </nav>
  );
};

