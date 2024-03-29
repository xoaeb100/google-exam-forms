import { IconButton } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import "./Header.css";
import formimage from "./images/forms_2020q4_48dp.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import avatarimage from "./images/default.jpg";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <TemporaryDrawer />
        {/* <IconButton>
          <MenuIcon />
        </IconButton> */}

        <img
          src={formimage}
          style={{ height: "40px", width: "40px" }}
          className="form_image"
        />
        <div className="info">Exam Forms</div>
      </div>
      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search" />
      </div>
      <div className="header_right">
        <IconButton style={{ margin: "0px" }}>
          <AppsIcon style={{ fontSize: "22px" }} />
        </IconButton>

        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
