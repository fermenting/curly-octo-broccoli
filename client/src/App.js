import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import Nav from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import BookSearch from './pages/BookSearch';
import SavedBooks from './pages/SavedBooks';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={BookSearch} />
            <Route exact path="/saved" component={SavedBooks} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
