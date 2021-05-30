import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import LoginModal from "./components/LoginModal/LoginModal";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import OrderHistory from "./components/OrderHistory/OrderHistory";
import HomePage from "./components/HomePage/HomePage";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import { images } from "./constants/images";
import { shopData } from "./shopData";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData, setProductData] = useState(shopData);
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
        <Header
          drawerToggler={drawerToggler}
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
        <CategoryMenu />
        <SideDrawer
          drawerToggler={drawerToggler}
          isOpen={isSidedrawerOpen}
          setIsLoginModal={setIsLoginModal}
        />
        {isSidedrawerOpen ? <Overlay toggler={drawerToggler} /> : null}
        {isLoginModal ? <LoginModal toggleLoginModal={toggleLoginModal} /> : null}
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
            <Route path="/order-history">
              <OrderHistory />
            </Route>
            <Route path="/">
              <HomePage
                images={images}
                productsData={productsData.slice(1, 4)}
                title="Trending Items"
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
