import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ShopPage from "./components/shopPage/shopPage";
import DetailPage from "./components/detail/detail";
import CardPage from "./components/cardPage/card";
import ComparisonPage from "./components/comparisonPage/comparisonPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
        <Header/>
          <Routes>
            <Route exact path="/" Component={MainPage} />
            <Route path="/shop" Component={ShopPage} />
            <Route path="/detail" Component={DetailPage} />
            <Route path="/cart" Component={CardPage} />
            <Route path="/comparison" Component={ComparisonPage} />
            <Route path="/profile" Component={} />
          </Routes>
          <Footer/>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
