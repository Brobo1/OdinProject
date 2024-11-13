import PropTypes from "prop-types";
import { useMemo } from "react";

export function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }, [products]);

  return (
    <>
      <h2>Cart</h2>
      <p>Total: {totalPrice}</p>
    </>
  );
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
};
