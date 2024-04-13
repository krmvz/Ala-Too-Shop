import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";

import { BrowserRouter, Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route exact path="/" Component={Header} />
          <Route path="/a" Component={MainPage} />
          <Route path="/b" Component={Footer} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
