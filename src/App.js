import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import ItemCard from "./components/ItemCard/ItemCard";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import Caraousal from "./components/Carousal/Caraousal";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

const images = [
  "https://images.unsplash.com/photo-1547409594-d172436140a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1547380109-a2fffd5b9036?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1224&q=80",
  "https://images.unsplash.com/photo-1547296915-8b37c9999d87?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1191&q=80",
];

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
            <Route path="/product">
              <Product images={images} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Caraousal images={images} />
              <ItemCard productsData={productsData} title="Trending Items" />
              <Footer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

      {/* <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
      {isSidedrawerOpen ? <Overlay drawerToggler={drawerToggler} /> : null} */}
    </div>
  );
}

export default App;
