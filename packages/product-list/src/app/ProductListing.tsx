import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }[];
  onAddToCart: (id: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </Container>
  );
};

export default ProductList;