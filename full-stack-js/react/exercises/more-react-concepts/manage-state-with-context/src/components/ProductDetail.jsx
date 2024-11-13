import { useContext } from "react";
import { ShopContext } from "../ctx.jsx";

export function ProductDetail() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div>
      {/* Image of the product */}
      <div>
        {/* elements that align with the design */}
        <button type="button" onClick={() => addToCart(products)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
