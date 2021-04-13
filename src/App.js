import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import ItemCard from "./components/ItemCard/ItemCard";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
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
      <BrowserRouter>
        <Navbar drawerToggler={drawerToggler} />
        <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
        {isSidedrawerOpen ? <Overlay drawerToggler={drawerToggler} /> : null}
        <div className="main">
          <Switch>
            <Route path="/category">
              <ProductListingPage />
            </Route>
            <Route path="/">
              <ItemCard productsData={productsData} title="Trending Items" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
