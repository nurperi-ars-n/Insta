import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const users = useSelector((state) => state.user);
  const userNAme = users.claims.name;
  console.log(userNAme);
  return <div>{userNAme}</div>;
};
