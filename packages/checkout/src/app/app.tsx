import {Navbar} from '@modular-mart/common-components';
import Checkout from './CheckoutComponent';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    fetch('http://localhost:4000/checkout/products')
    .then(res => {
     return res.json()
    })
    .then(items=>{setProducts(items)})
  },[])
  const productListLink = 'http://localhost:3001';
  const checkoutLink = 'http://localhost:3000';
  return (
 <><Navbar productListLink={productListLink} checkoutLink={checkoutLink}></Navbar>
 <Checkout products={products}/></>
  );
}

export default App;
