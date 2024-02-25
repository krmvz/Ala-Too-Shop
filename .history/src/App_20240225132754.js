import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";

import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
        <Router>
          <Route exact path="/" Component={Header} />
          <Route path="/a" Component={MainPage} />
          <Route path="/b" Component={Footer} />
        </Router>
      </BrowserRouter>
      {/* <MainPage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
