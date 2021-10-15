import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
