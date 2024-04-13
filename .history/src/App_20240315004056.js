import React, { useState } from 'react';
import LoginPage from './LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // In a real application, you would perform authentication logic here
    // For demonstration purposes, we're just setting isAuthenticated to true
    setIsAuthenticated(true);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>
          <p>You are logged in!</p>
          {/* Other authenticated content */}
        </div>
      )}
    </div>
  );
};

export default ;









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
//     <div className="App">
//       {/* <BrowserRouter> */}
//         <Router>
//         <Header/>
//           <Routes>
//             <Route exact path="/" Component={MainPage} />
//             <Route path="/shop" Component={ShopPage} />
//             <Route path="/detail" Component={DetailPage} />
//             <Route path="/cart" Component={CardPage} />
//             <Route path="/comparison" Component={ComparisonPage} />
//             <Route path="/profile" Component={Profile} />
//             <Route exact path="/login" Component={LoginPage } />
//           </Routes>
//           <Footer/>
//         </Router>
//       {/* </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;
