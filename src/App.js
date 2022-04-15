import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  
  async function fetchData() {
    try{
      const results = await fetch('https://fakestoreapi.com/products');
      const data = await results.json();
      setProducts(data);

    }catch(error) {
      console.log(error);
    }
  };

  console.log(products);
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);   
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/products' element={ <Products allProducts={products} loading={loading}/> }/>
        <Route path='/products/:id' element={ <ProductDetails products={products} loading={loading}/> }/>
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
