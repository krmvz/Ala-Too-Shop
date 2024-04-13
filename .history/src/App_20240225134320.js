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

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
        <Header/>
          <Routes>
            
            <Route exact path="/" Component={MainPage} />
            <Footer/>
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
