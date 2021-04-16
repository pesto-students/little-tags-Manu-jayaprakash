import React, { useState, useEffect } from "react";
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
import { auth, createUserProfileDocument } from "./firebase/firebase";
import * as ROUTES from './router/routes';

const images = [
  "https://images.unsplash.com/photo-1547409594-d172436140a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1547380109-a2fffd5b9036?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1224&q=80",
  "https://images.unsplash.com/photo-1547296915-8b37c9999d87?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1191&q=80",
];

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((json) => {
        setProductsData(json);
      });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      setIsLoginModal(false);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setActiveUser((prevState) => ({
            ...prevState,
            id: snapShot.id,
            ...snapShot.data(),
          }));
        });
      } else {
        setActiveUser({});
      }
    });
  }, [activeUser.id]);

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
          activeUser={activeUser}
        />
        <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
        {isSidedrawerOpen ? <Overlay toggler={drawerToggler} /> : null}
        {isLoginModal ? <LoginModal /> : null}
        {isLoginModal ? <Overlay toggler={toggleLoginModal} /> : null}

        <div className="main">
          <Switch>
            <Route path={ROUTES.CATEGORY}>
              <ProductListingPage />
            </Route>
            <Route path={ROUTES.PRODUCT}>
              <Product images={images} />
            </Route>
            <Route path={ROUTES.CART}>
              <Cart />
            </Route>
            <Route path={ROUTES.LANDING}>
              <Caraousal images={images} />
              <Categories/>
              <ItemCard productsData={productsData} title="Trending Items" />
              <Footer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
