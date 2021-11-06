import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/imgs/logo.png";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="container">
        <div className="header">
          <Link to="/">
            <img className="logo-inst" src={logo} alt="" />
          </Link>

          <input type="text" placeholder={"Search..."} />

          <div className="insta-icons">
            <Link to="/">
              <HomeIcon className="icon" />
            </Link>
            <Link to="/message">
              {" "}
              <ForumIcon className="icon" />
            </Link>
            <Link to="/addPost">
              <AddIcon className="icon" />
            </Link>
            <Link to="/likes">
              <FavoriteBorderIcon className="icon" />
            </Link>
            <Link to="/profile">
              <AccountCircleIcon className="icon" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
