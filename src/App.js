import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";
import Caraousal from "./components/Carousal/Caraousal";
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

const images =[
  'https://images.unsplash.com/photo-1547409594-d172436140a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80',
  'https://images.unsplash.com/photo-1547380109-a2fffd5b9036?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1224&q=80',
  'https://images.unsplash.com/photo-1547296915-8b37c9999d87?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1191&q=80'
];

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const drawerToggler = () => {
    setIsSidedrawerOpen(!isSidedrawerOpen);
  };

  return (
    <div className="App">
      <Navbar drawerToggler={drawerToggler} />
      {/* <Caraousal images={images} /> */}
      <Cart />
      <Footer />
      {/* <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
      {isSidedrawerOpen ? <Overlay drawerToggler={drawerToggler} /> : null} */}
    </div>
  );
}

export default App;
