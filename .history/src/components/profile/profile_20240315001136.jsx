// App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    // In a real application, you would validate user credentials and set isAuthenticated to true if successful
    this.setState({ isAuthenticated: true });
  }

  handleLogout() {
    // In a real application, you would clear any authentication tokens and set isAuthenticated to false
    this.setState({ isAuthenticated: false });
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage
              isAuthenticated={isAuthenticated}
              onLogin={this.handleLogin}
            />
          </Route>
          <PrivateRoute
            path="/dashboard"
            isAuthenticated={isAuthenticated}
            component={DashboardPage}
            onLogout={this.handleLogout}
          />
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}

function PrivateRoute({ isAuthenticated, component: Component, onLogout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} onLogout={onLogout} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default Profile;
