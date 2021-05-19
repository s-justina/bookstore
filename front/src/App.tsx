import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./reducers/store";
import Home from "./pages/home";
import Cart from "./containers/Cart";
import Summary from "./pages/Summary";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/summary">
                  <Summary />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
