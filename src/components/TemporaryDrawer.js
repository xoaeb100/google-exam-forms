import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import formimage from "./images/forms_2020q4_48dp.png";
import excelsheetimage from "./images/google-sheets.png";

import docimage from "./images/google-docs--v1.png";

import slidesimage from "./images/google-slides.png";
import driveimage from "./images/google-drive--v1.png";

import "./Drawer.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <ListItem className="logo_title">
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <img
              src={formimage}
              style={{ height: "40px", width: "40px" }}
              className="form_image"
            />
            <div className="info">Exam Forms</div>
          </ListItemText>
        </ListItem>
      </List>

      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={docimage} style={{ height: "20px", width: "20px" }} />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            {" "}
            Docs
          </div>
        </ListItem>

        <ListItem className="list_item">
          <img
            src={excelsheetimage}
            style={{ height: "20px", width: "20px" }}
          />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            {" "}
            Sheets
          </div>
        </ListItem>

        <ListItem className="list_item">
          <img src={slidesimage} style={{ height: "20px", width: "20px" }} />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "600",
              color: "grey",
            }}
          >
            {" "}
            Slides
          </div>
        </ListItem>

        <ListItem className="list_item">
          <img src={formimage} style={{ height: "20px", width: "20px" }} />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            {" "}
            Forms
          </div>
        </ListItem>
      </List>

      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <FiSettings />
          <div style={{ marginLeft: "20px", fontSize: "14px" }}> Settings</div>
        </ListItem>

        <ListItem className="list_item">
          <BsQuestionCircle />
          <div
            style={{
              marginLeft: "20px",
              fontSize: "14px",
              fontWeight: "500",
              color: "grey",
            }}
          >
            {" "}
            Help & Feedback
          </div>
        </ListItem>
      </List>

      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "08px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={driveimage} style={{ height: "20px", width: "20px" }} />

          <div style={{ marginLeft: "20px", fontSize: "14px" }}> Drive</div>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
