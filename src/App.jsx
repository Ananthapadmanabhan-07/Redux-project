import React from "react";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";

import Carts from "./components/Carts";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div style={{ flex: 3 }}>
        <ProductList />
      </div>
      <div style={{ flex: 1 }}>
        <Wishlist />
        <hr />
        <Carts />
      </div>
    </div>
  );
};

export default App;





