import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Search from "./pages/search";
import Saved from "./pages/save";
import NotFound from "./pages/notFound";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-is-fullheight">
          <ToastContainer />

          <Router>
            <div className="head-body">
              <NavBar />
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/saved" component={Saved} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" exact to="/search" />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </Router>
          <div className="head-foot">
            <br></br>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;