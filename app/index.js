import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Battle from "./components/battle";
import Popular from "./components/Popular";
import Results from "./components/Results";
import { ThemeProvider } from "./components/context/Theme";
import Nav from "./components/Nav";

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route
                  render={() => (
                    <h1>
                      404 <br />
                      <br /> ☝🏻 D'oh... good ol' 404...means you aren't on a
                      valid page. Try again.
                    </h1>
                  )}
                />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
