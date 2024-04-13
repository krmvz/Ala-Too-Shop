import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';
import ShopPage from './components/shopPage/shopPage';
import DetailPage from './components/detail/detail';
import CardPage from './components/cardPage/card';
import ComparisonPage from './components/comparisonPage/comparisonPage';
import Profile from './components/profile/profile';

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
    // Clear authentication tokens or any other necessary data
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65f2bc13034bdbecc765ae32.mockapi.io/users'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/cart" element={<CardPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
