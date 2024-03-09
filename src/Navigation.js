import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/record"
          style={{ textDecoration: "none", color: "inherit" }}>
          Profile
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Typography
            variant="body1"
            component={NavLink}
            to="/upload"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Upload File
          </Typography>
          <Typography
            variant="body1"
            component={NavLink}
            to="/record"
            style={{
              marginLeft: 20,
              textDecoration: "none",
              color: "inherit",
            }}>
            Employee Record
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
