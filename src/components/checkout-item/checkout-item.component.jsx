import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  const { removeItemFromCart, reduceItemFromCart, addItemToCart } = useContext(CartContext);


  function reduceItemHandler() {
    reduceItemFromCart(cartItem)
  }

  function removeItemHandler() {
    removeItemFromCart(cartItem)
  }

  function addItemHandler() {
    addItemToCart(cartItem)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price"> {price} </span>
      <div
        className="remove-button"
        onClick={removeItemHandler}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
