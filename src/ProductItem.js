import './App.css';

function ProductItem(props) {
  return (
    <div className="product" key={props.id}>
      <img className="product-img" src={props.img} />
      <p>{props.name}</p>
      <p>{props.price} kd</p>
    </div>
  );
}

export default ProductItem;
