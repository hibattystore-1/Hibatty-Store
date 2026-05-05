import React, { useState } from "react";

const products = [
  { id: 1, name: "Sage Abaya", price: 2499 },
  { id: 2, name: "Powder Blue Hijab", price: 499 },
  { id: 3, name: "Ivory Jilbab", price: 2999 },
  { id: 4, name: "Bridal Abaya", price: 5999 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    alert("Payment integration (Razorpay) will go here.");
  };

  return (
    <div style={{ padding: 20, fontFamily: "serif" }}>
      <h1>HIBATTY STORE</h1>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      <p>Total: ₹{total}</p>
      <button onClick={handlePayment}>Checkout</button>
    </div>
  );
}
