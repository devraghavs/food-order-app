import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCart = () =>{
    setCartShown(true);
  }
const hideCart = () =>{
  setCartShown(false);
}

  return (
  <CartProvider>
     {cartShown && <Cart onClose={hideCart} />}
      <Header onClick={showCart}/>
      <Meals />
      </CartProvider>
  
  );
}

export default App;
