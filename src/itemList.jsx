import React from "react";
import data from "../public/data/data.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./actions/cartActions";

export function Item({ id, name, description, price, image }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setCount(count + 1);
    dispatch(addToCart({ name, description, price, image }));
  };

  return (
    <div className="bg-white p-4">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={image}
        alt={name}
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{description}</p>
      <p className="text-gray-500">${price}</p>
      <button
        className="btn bg-slate-600 rounded-md px-2 text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

function ItemList() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-4 m-5">
      {data.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
