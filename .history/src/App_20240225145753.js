import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";

// import { BrowserRouter, Router, Route } from 'react-router-dom';

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import ShopPage from "./components/shopPage/shopPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
        <Header/>
          <Routes>
            <Route exact path="/" Component={MainPage} />
            <Route exact path="/shop" Component={ShopPage} />
          </Routes>
          <Footer/>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
