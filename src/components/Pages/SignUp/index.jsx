import React from "react";
import './LayoutSignUp.css'
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase";
import { login, change_token } from "../../../store/actions";

firebase.initializeApp({
  apiKey: "AIzaSyB5TPytRkCGFNFV6bm6aIwQs6zrAUeYXMk",
  authDomain: "instagram-project-921bc.firebaseapp.com",
  projectId: "instagram-project-921bc",
  storageBucket: "instagram-project-921bc.appspot.com",
  messagingSenderId: "1040797414249",
  appId: "1:1040797414249:web:b700c35170f05689a243f8",
  measurementId: "G-NVWMNRFR2H",
});

const auth = firebase.auth();

export const SignUp = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.isAuth);

  console.log(isAuth);

  if (isAuth) return <Redirect to="/" />;

  const authorization = async () => {
    const user = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        dispatch(login(idTokenResult.claims));
        dispatch(change_token(idTokenResult.token));
        localStorage.setItem("token", JSON.stringify(idTokenResult));
      });
  };

  return (
    <div>
        <div>
            <div className="container">
                <div className="img">
                </div>
                <div className="login-content">
                    <form action="#">
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input type="text" className="input"/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input"/>
                            </div>
                        </div>
                        <button onClick={authorization}>
                            <span>Sign In with Google</span>{" "}
                        </button>
                        <input type="submit" className="btn" value="Login"/>
                    </form>
                </div>
            </div>
            <button onClick={authorization}>
                <span>Sign In Google</span>{" "}
            </button>
        </div>


    </div>
  );
};
