import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slice/productSlice";
import { addToWishlist } from "../redux/slice/wishlistSlice";
import { addToCart } from "../redux/slice/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    alert(`Added to Wishlist!`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`Added to Cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Purchased "${product.title}" for ₹${product.price}!`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div class=" bg-dark-100 text-center mx-3 text-1xl ">
      <h2 class=" text-5xl">Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {items.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "16px" }}>
            <img className="w-32 h-42 object-cover" src={product.image} alt={product.title} width="100" height="100" />
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>
           <div className="flex flex-col text-center w-32 gap-3  items-center">
             <button onClick={() => handleAddToWishlist(product)} className="bg-blue-300 text-white px-2 rounded hover:bg-blue-600 p-2  gap-4">Add to Wishlist</button>
            <button onClick={() => handleAddToCart(product)} className="bg-red-300 text-white px-2 rounded hover:bg-red-600 p-2  gap-4">Add to Cart</button>
            <button onClick={() => handleBuyNow(product)} className="bg-yellow-300 text-white px-2 rounded hover:bg-yello-600 p-2">Buy Now</button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;





