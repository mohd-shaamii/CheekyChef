import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#d70f43" }} // Use sx prop for inline styling
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 className="logo text-2xl font-bold lowercase italic">
            Cheeky<span className="text-red-500">Chef</span>
          </h2>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flex: 1,
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                pointerEvents: "none",
                padding: "10px",
              }}
            >
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search recipes..."
              style={{
                paddingLeft: "30px",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.55)",
                borderRadius: "5px",
              }}
            />
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <Button
                component={Link}
                to="/create"
                variant="contained"
                color="primary"
              >
                Create Recipe
              </Button>
            </li>
            <li>
              <Button
                component={Link}
                to="/profile"
                variant="contained"
                color="primary"
              >
                Profile
              </Button>
            </li>
            <li>
              <Button
                className="login"
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
                sx={{ marginLeft: "11px" }} // Use sx prop for inline styling
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
