import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./views/Home";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      
      <ScrollToTop />
      <Home />
    </>
  );
};

export default App;
