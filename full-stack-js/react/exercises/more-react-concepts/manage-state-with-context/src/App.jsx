import { createContext, useState } from "react";
import { Header } from "./components/Header.jsx";
import { ProductDetail } from "./components/ProductDetail.jsx";
import { ShopContext } from "./ctx.jsx";
// other imports for Header and ProductDetail

export default function App() {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);

  const products = []; /* some custom hook that fetches products and returns
   the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header cartItemsCount={cartItems.length} />
      <ProductDetail addToCart={addToCart} products={products} />
    </ShopContext.Provider>
  );
}
