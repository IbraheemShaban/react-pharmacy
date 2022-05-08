import './App.css';
import { products } from './products.js';
const productsList = products;

function App() {
  const result = productsList.map((e) => (
    <div className="product" key={e.id}>
      <img className="product-img" src={e.img} />
      <p>{e.name}</p>
      <p>{e.price} kd</p>
    </div>
  ));
  console.log(result);
  return (
    <div className="container">
      <h1>Boots Pharmacy</h1>
      <h4>Where you buy medicine</h4>
      <img
        className="image"
        src="https://media.istockphoto.com/photos/boots-local-pharmacy-facade-picture-id458633357?k=20&m=458633357&s=612x612&w=0&h=eXn-tv4-FIz6NNVu3Iw0zhIyOZK78ipCxPlxWROYplg="
        alt="pharmacy"
      />
      <div className="products-list"> {result}</div>
    </div>
  );
}

export default App;
