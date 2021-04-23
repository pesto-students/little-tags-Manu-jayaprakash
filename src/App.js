import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import Categories from "./components/Categories/Categories";
import ItemCard from "./components/ItemCard/ItemCard";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import Caraousal from "./components/Carousal/Caraousal";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import LoginModal from "./components/LoginModal/LoginModal";
import Checkout from './components/Checkout/Checkout'
import { images } from "./constants/images";
import { shopData } from "./shopData";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData,setProductData] = useState(shopData);
  const [isLoginModal, setIsLoginModal] = useState(false);

  const drawerToggler = () => {
    setIsSidedrawerOpen(!isSidedrawerOpen);
  };
  const toggleLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          drawerToggler={drawerToggler}
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
        <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
        {isSidedrawerOpen ? <Overlay toggler={drawerToggler} /> : null}
        {isLoginModal ? <LoginModal /> : null}
        {isLoginModal ? <Overlay toggler={toggleLoginModal} /> : null}

        <div className="main">
          <Switch>
            <Route path="/category">
              <ProductListingPage />
            </Route>
            <Route path="/product">
              <Product images={images} productsData={productsData} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Caraousal images={images} />
              <Categories />
              <ItemCard
                productsData={productsData.slice(0, 4)}
                title="Trending Items"
              />
              <Footer />
            </Route>
          </Switch>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
