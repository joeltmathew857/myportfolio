import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Flex from "./components/Flex";
import Base from "./components/FontMenter/BaseApparel";

import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* <Navbar />
      <Body></Body>
      <Footer /> */}
      {/* <Flex /> */}
      <Base />
    </div>
  );
};

export default App;
