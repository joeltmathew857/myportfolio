import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AOS from "aos";
import Services from "./components/Services";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Body>
        <Services />
      </Body>
      <Footer />
    </div>
  );
};

export default App;
