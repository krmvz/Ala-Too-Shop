import React, { useState, useEffect } from 'react';
import LoginPage from './pages/login';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ShopPage from "./components/shopPage/shopPage";
import DetailPage from "./components/detail/detail";
import CardPage from "./components/cardPage/card";
import ComparisonPage from "./components/comparisonPage/comparisonPage";
import Profile from "./components/profile/profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    // In a real application, you would perform authentication logic here
    // For demonstration purposes, we're just setting isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // In a real application, you would clear authentication tokens and reset state
    // Clear authentication tokens or any other necessary data
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
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
             <Route path="/profile" Component={Profile} />
           </Routes>
           <Footer/>
         </Router>
       {/* </BrowserRouter> */}
     </div>
      )}
    </div>
  );
};
const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default App;









// import Footer from "./components/footer/footer";
// import Header from "./components/header/header";
// import MainPage from "./components/mainPage/mainPage";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import ShopPage from "./components/shopPage/shopPage";
// import DetailPage from "./components/detail/detail";
// import CardPage from "./components/cardPage/card";
// import ComparisonPage from "./components/comparisonPage/comparisonPage";
// import Profile from "./components/profile/profile";
// import LoginPage from "./pages/login";

// function App() {
//   return (
//     
//   );
// }

// export default App;
