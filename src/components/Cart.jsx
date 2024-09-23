import React from "react";
import { connect } from "react-redux";
import Header from "./header";

function Cart({ items }) {
  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {items.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Item</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="bg-gray-100 border-b">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No items in cart</p>
        )}
        <p className="font-bold text-xl mt-4">Total: ${totalCost.toFixed(2)}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-700">
          Place Order
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
