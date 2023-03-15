import express from 'express';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 9.99,
    description: 'This is product 1.',
    image: 'https://picsum.photos/200/300.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    description: 'This is product 2.',
    image: 'https://picsum.photos/id/237/200/300',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    description: 'This is product 3.',
    image: 'https://picsum.photos/id/236/200/300',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 59.99,
    description: 'This is product 3.',
    image: 'https://picsum.photos/id/238/200/300',
  },
];

const app = express();
let productsAdded = [];
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/checkout/products', (req, res) => {
  res.json(productsAdded);
});

app.post('/products', (req, res) => {
  console.log(req.body)
  productsAdded=[...productsAdded, ...req.body.products]  
  res.send({ message: 'products updated', productsAdded });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});