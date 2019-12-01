import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import MainPage from '../components/MainPage';
import {history} from '../index'


function AppRouter(){
      return (
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={MainPage} />
              </Switch>
            </div>
          </Router>
      );
  }

const mapStateToProps = state => ({
...state
});

export default AppRouter;


