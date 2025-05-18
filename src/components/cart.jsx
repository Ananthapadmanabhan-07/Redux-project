import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "12px" }}>
            <img src={item.image} alt={item.title} width="50" height="50" />
            <strong>{item.title}</strong> - ₹{item.price} × {item.quantity}
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300" onClick={() => {
        dispatch(clearCart());
        alert("Checkout complete! Thank you for your purchase.")
      }}>
        Checkout
      </button>
    </div>
  );
};

export default Cart
