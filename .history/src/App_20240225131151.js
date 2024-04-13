import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        <Switch>
          <Route exact path="/" Component={Header} />
          <Route exact path="/" Component={MainPage} />
          <Route exact path="/" Component={Foo} />
        </Switch>
      </Router>
      {/* <MainPage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
