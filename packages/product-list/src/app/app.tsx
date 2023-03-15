import {Navbar} from '@modular-mart/common-components';
import ProductList from './ProductListing';
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
    fetch('http://localhost:4000/products')
    .then(res => {
     return res.json()
    })
    .then(items=>{setProducts(items)})
  },[])
  const handleAddToCart = (id: number) => {
    const productSelected = products.filter((item)=>item.id===id)
    fetch('http://localhost:4000/products', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"products":[...productSelected]})
    }).then((res)=>console.log(res)).catch(err=>console.log(err)) 
  }
   
   const productListLink = 'http://localhost:3001';
  const checkoutLink = 'http://localhost:3000';
  return (
 <><Navbar productListLink={productListLink} checkoutLink={checkoutLink}></Navbar>
 <ProductList products={products} onAddToCart={handleAddToCart}/></>
  );
}

export default App;
