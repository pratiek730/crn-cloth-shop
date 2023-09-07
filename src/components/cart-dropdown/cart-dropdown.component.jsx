import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
function CartDropdown() {
  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext);

  function goToCheckout() {
    navigate('checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <CustomButton onClick={goToCheckout}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
