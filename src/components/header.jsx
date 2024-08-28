// src/components/Header.jsx
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="inline-block">
        <h1 className="font-bold">Auto Parts Shop</h1>
      </div>
      <div className="flex space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <div className="relative">
          <a href="/cart" className="hover:underline">
            Cart ({cartItems.length})
          </a>
          <div className="absolute right-0 mt-2 w-48 bg-white text-black p-2 rounded shadow-lg">
            {cartItems.length > 0 ? (
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold">Total: ${totalCost.toFixed(2)}</p>
                <h2 className=" flex justify-center btn rounded-md bg-slate-600 text-white p-1">
                  place orders
                </h2>
              </div>
            ) : (
              <p>No items in cart</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
