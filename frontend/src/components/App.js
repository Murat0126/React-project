import React from "react";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import '../styles/App.css';
import AppRouter from "../routes/AppRoot";
import reducer from "../reducers";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)));


function App(){
    return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

}

export default App;