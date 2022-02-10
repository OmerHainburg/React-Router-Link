import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import MyComponent from "./MyComponent";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className="link" to="/component1"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          >
          Component 1
        </NavLink>
        <NavLink className="link" to="/component2"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          >
          Component 2
        </NavLink>
      </nav>
      <div className="Instructions">
        <p className="block">
          For this exercise, you will have to change the style of the link when
          the URL matches the path. When a link is <b>active</b> it needs to be{" "}
          <b>bold</b> and <span style={{ color: "red" }}>red</span>.
          <br />
          <br />
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://reacttraining.com/react-router/web/api/NavLink"
          >
            Help{" "}
          </a>
        </p>
        <Switch>
          <Route path="/component1">
            <MyComponent  />
          </Route>
          <Route path="/component2">
            <MyComponent  />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
