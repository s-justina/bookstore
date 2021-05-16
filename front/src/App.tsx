import React from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Cart from "./containers/Cart";
import store from "./reducers/store";
import Summary from "./pages/Summary";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart"><Cart /></Route>
              <Route path="/summary"><Summary /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
