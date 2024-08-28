// src/components/Cart.jsx
import React from "react";
import { connect } from "react-redux";
import Header from "./header";

function Cart({ items }) {
  const totalCost = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Header />
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold">Total: ${totalCost.toFixed(2)}</p>
      <div> placeorder </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
