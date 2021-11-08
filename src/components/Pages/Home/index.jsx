import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const users = useSelector((state) => state.user);
 
  // console.log(userNAme);
  return <div>{users}</div>;
};
