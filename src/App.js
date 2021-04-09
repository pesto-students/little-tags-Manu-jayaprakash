import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductsData(json);
      });
  }, []);

  const drawerToggler = () => {
    setIsSidedrawerOpen(!isSidedrawerOpen);
  };

  return (
    <div className="App">
      <Navbar drawerToggler={drawerToggler} />
      <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
      {isSidedrawerOpen ? <Overlay drawerToggler={drawerToggler} /> : null}
      <div className="main">
        <ItemCard productsData={productsData} title="Trending Items"/>
      </div>
    </div>
  );
}

export default App;
