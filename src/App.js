import React, { useState } from "react";
import "./app.scss";
import Header from "./components/Header";
import Product from "./components/Product";
import { AboutContent, InfoProduct, ReviewsContent } from "./data/ManageContent";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

function App() 
{
  const [show, setShow] = useState(false);

  const toggle = () =>
  { 
    setShow(!show);
  };

  return (
    <>
      <Header toggle={toggle} show={show} />
      <Dropdown show={show} toggle={toggle} />
      <Product {...InfoProduct} show={show} />
      <About {...AboutContent } />
      <Reviews {...ReviewsContent} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
