import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";

import logo from "../../assets/imgs/logo.png";

import "./Header.css";

export const Header = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
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
              <div className="header_profile">
                <img
                  src={user.picture || ""}
                  onClick={() => history.push("/profile")}
                />
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
