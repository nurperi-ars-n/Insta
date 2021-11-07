import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


import logo from "../../../assets/imgs/logo.png";
import imgBlock from "../../../assets/imgs/imgBlock.jpg";

import "./LogIn.css";

export const LogIn = () => {
  return (
    <div>
      <div className="container main">
        <div className="imgBlock">
          <img src={imgBlock} className="imgBlock" alt="" />
        </div>
        <Card
          style={{ width: "28rem", background: "#E6E6FA", height: "28rem" }}
        >
          <Card.Body>
            <img className="logo" src={logo} alt="" />
            <Link to={"/signup"}>
              <Card.Link href="#">еще не зарегался?</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
