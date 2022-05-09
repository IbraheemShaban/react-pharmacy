import { products } from './products.js';
import ProductItem from './ProductItem';
import './App.css';

function ProductList() {
  const result = products.map((e) => (
    <ProductItem key={e.id} img={e.img} name={e.name} price={e.price} />
  ));
  return <div className="products-list"> {result}</div>;
}

export default ProductList;
