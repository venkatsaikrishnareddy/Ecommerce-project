import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ItemList from "./itemList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
