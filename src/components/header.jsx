import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="inline-block">
        <h1 className="font-bold">Auto Parts Shop</h1>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <div className="relative">
          <Link to="/cart" className="hover:underline">
            Cart ({cartItems.length})
          </Link>
          <div className="absolute right-0 mt-2 w-64 bg-white text-black p-4 rounded shadow-lg">
            {cartItems.length > 0 ? (
              <div>
                <ul>
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded shadow"
                    >
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => handleRemove(item.name)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="font-bold mt-4">Total: ${totalCost.toFixed(2)}</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-700">
                  Place Order
                </button>
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
