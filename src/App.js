import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import LoginModal from "./components/LoginModal/LoginModal";
import { images } from "./constants/images";
import { data } from "./testdata";
import { SHOP_DATA } from "./shopData";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [isLoginModal, setIsLoginModal] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        setProductsData(SHOP_DATA);
      })
      .catch((e) => {
        setProductsData(data);
      });
  }, []);

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
        {/* <Navbar
          drawerToggler={drawerToggler}
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        /> */}
        <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
        {isSidedrawerOpen ? <Overlay toggler={drawerToggler} /> : null}
        {isLoginModal ? <LoginModal /> : null}
        {isLoginModal ? <Overlay toggler={toggleLoginModal} /> : null}
          <Switch>
            <Route path="/category">
              <ProductListingPage />
            </Route>
            <Route path="/product">
              <Product images={images} productsData={productsData}/>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <HomePage images={images} productsData={productsData.slice(1, 4)} title="Trending Items" />
            </Route>
          </Switch>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
