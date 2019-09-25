import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBR02rhnrXatWAV0RlWBATDb2pH4FpD3vw",
  authDomain: "react-ayaz.firebaseapp.com",
  databaseURL: "https://react-bfb9d.firebaseio.com/",
  projectId: "react-bfb9d",
  storageBucket: "gs://react-bfb9d.appspot.com/"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.database = app.database();
  }

  createUserWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };

  signInWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };

  signOut = () => {
    return new Promise((resolve, reject) => {
      this.auth
        .signOut()
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };

  resetPasswordRequest = email => {
    return new Promise((resolve, reject) => {
      this.auth
        .sendPasswordResetEmail(email)
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };

  updatePassword = password => {
    return new Promise((resolve, reject) => {
      this.auth.currentUser
        .updatePassword(password)
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };

  user = uid => this.database.ref(`users/${uid}`);
  users = () => this.database.ref("users");

  messages = () => this.database.ref("messages");

  addMessage = payload => {
    return new Promise((resolve, reject) => {
      this.database
        .ref("messages")
        .set(payload)
        .then(function(auth) {
          resolve(auth);
        })
        .catch(function(error) {
          reject(error);
        })
        .then(function() {});
    });
  };
}

export default Firebase;
