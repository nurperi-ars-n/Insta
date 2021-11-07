import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LogIn } from "../Pages/LogIn";
import { Home } from "../Pages/Home";
import { SignUp } from "../Pages/SignUp";
import { Header } from "../Header";
import { AddPost } from "../Pages/AddPost";
import { Message } from "../Pages/Message";
import { Profile } from "../Pages/Profile";
import { Likes } from "../Pages/Likes";
import { useSelector } from "react-redux";



export const MainLayout = () => {
  const isAuth = useSelector((state) => state.isAuth)
  
  return (
    <>
   <div>
      <Header />
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/addPost" component={AddPost} />
        <Route path="/message" component={Message} />
        <Route path="/profile" component={Profile} />
        <Route path="/likes" component={Likes} />
        <Route  path="/" component={Home} />
      </Switch>
    </div>
    
    </>
   
  );
};
