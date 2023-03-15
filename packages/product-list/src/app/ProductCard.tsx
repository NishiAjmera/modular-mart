import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };
  onAddToCart: (id: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Price = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #666;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id);
  };

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>${product.price.toFixed(2)}</Price>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Container>
  );
};

export default ProductCard;