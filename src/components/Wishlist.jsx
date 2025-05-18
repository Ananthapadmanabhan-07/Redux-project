import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  removeFromWishlist } from "../redux/slice/wishlistSlice";


const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  if (wishlistItems.length === 0) return <p>Your wishlist is empty.</p>;

  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "12px" }}>
            <img src={item.image} alt={item.title} width="50" height="50" />
            <strong>{item.title}</strong> - ₹{item.price}
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;


