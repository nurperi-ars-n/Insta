import React from "react";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase";
import { login } from "../../../store/actions";

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
  const state = useSelector((state) => state);

  console.log(isAuth);
 

  if (isAuth) return <Redirect to="/" />;
  const authorization = async () => {
    const user = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then((IdTokenResult) => {
        dispatch(login(IdTokenResult));
      });
      
  };

  return (
    <div>
      <button onClick={authorization}>
        <span>Sign In Google</span>{" "}
       
      </button>
     
    </div>
  );
};
