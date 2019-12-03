import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from '../components/MainPage';
import {history} from '../index'
import LoginPage from "../containers/login/LoginPageContainer";
import NotFound from "../components/NotFound";


function AppRouter(){
      return (
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="" component={NotFound} />
              </Switch>
            </div>
          </Router>
      );
  }

const mapStateToProps = state => ({
...state
});

export default connect(
    mapStateToProps,
    {}
)(AppRouter);



