import './App.css';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Address from './components/Address';
import ProductDetails from './components/ProductDetails';
import Electronics from './components/Electronics';
import Sports from './components/Sports';
import Outdoor from './components/Outdoor';
import Health from './components/Health';
import Travel from './components/Travel';
import {useEffect, useState} from 'react';
import Thankyou from './components/Thankyou';
import axios from "axios";

function App() {

  const [cart, setCart] = useState([]);
  const [products, setProduct] = useState([]);
  const [badgeCount,setBadgeCount] = useState(0);
  const fetchData = () => {
    return axios.get("http://localhost:4000/product")
    .then((response) => setProduct(response.data));     
  }
  useEffect(() => {
    fetchData();
  },[]);


  const handleCartCount = (item) => {
    // badgeCount=badgeCount+1;
    setBadgeCount(badgeCount+1);
    if (cart.indexOf(item) !== -1) return;
    else{
    setCart([...cart, item]);
    }
  };

  const [search,setSearch] = useState('');
  // console.log(search);

  const [counter, setCounter] = useState(0);

  const handleIncrementChange =(product)=>{
  
 setCounter(product.quantity+1);
 product.quantity=counter;
 setCart([...cart]);
}
 const handleDecrementChange =(product)=>{
  
  setCounter(product.quantity-1);
  product.quantity=counter;
  setCart([...cart]);
}

if(counter<=0) {
  setCounter(1);
 }


  return (
  
    <div className="App">
        <BrowserRouter>
     <Header badgeCount={cart.length} search={search} setSearch={setSearch}/>
     {/* <Electronics  products={products}/> */}
      <Routes>
      <Route path="/electronics" element={<Electronics products={products} search={search}/>}></Route>
      <Route path="/outdoor" element={<Outdoor products={products} search={search}/>}></Route>
      <Route path="/sports" element={<Sports products={products} search={search}/>}></Route>
      <Route path="/travel" element={<Travel products={products} search={search}/>}></Route>
      <Route path="/health" element={<Health products={products} search={search}/>}></Route>

      <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/productDetails/:id" element={<ProductDetails  cart={cart} setCart={setCart}  badgeCount={badgeCount} handleCartCount={handleCartCount} handleIncrementChange={handleIncrementChange} handleDecrementChange={handleDecrementChange}/>}></Route>
      <Route path="/thankyou" element={<Thankyou />}></Route>

      </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
