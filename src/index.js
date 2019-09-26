import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Firebase, { FirebaseContext } from "./firebase/index";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
