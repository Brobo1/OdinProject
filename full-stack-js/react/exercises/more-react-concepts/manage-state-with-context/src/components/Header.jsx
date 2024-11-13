import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../ctx.jsx";

function Links() {
  const { cartItems } = useContext(ShopContext);

  return (
    <ul>
      {/* Links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div className="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}
