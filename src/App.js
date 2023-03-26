import logo from './logo.svg';
import './App.css';

function App() {

  const products= [
    {name:'laptop',price:'15000'},
    {name:'phone',price:'5000'},
    {name:'watch',price:'3000'},
    {name:'tablet',price:'1000'},
  ]
  return (
    <div className="App">
     {
products.map(product=><Product name={product.name} price={product.price}></Product>)
     }


     {/* <Product name="Laptop" price=" 2000$"></Product> 
     <Product name="Iphone" price=" 1499$"></Product> 
     <Product name="Watch" price=" 100$"></Product>  */}
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
