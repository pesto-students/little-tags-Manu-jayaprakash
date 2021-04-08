import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [isSidedrawerOpen, setIsSidedrawerOpen] = useState(false);
  const drawerToggler = () => {
    setIsSidedrawerOpen(!isSidedrawerOpen);
  };

  return (
    <div className="App">
      <Navbar drawerToggler={drawerToggler} />
      <SideDrawer drawerToggler={drawerToggler} isOpen={isSidedrawerOpen} />
      {isSidedrawerOpen ? <Overlay drawerToggler={drawerToggler} /> : null}
    </div>
  );
}

export default App;
