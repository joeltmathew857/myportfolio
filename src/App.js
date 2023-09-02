import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
