import { useState } from "react";
import Header from "./components/header";
import ItemList from "./itemList";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <ItemList />
      <Footer />
    </>
  );
}

export default App;
