import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { HomeWindow } from '../containers/HomeWindow';
import { ToDoWindow } from '../containers/ToDoWindow';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomeWindow} />
        <Route path="/:boardID" component={ToDoWindow} />
      </div>
    </Router>
  );
};

export default AppRouter;