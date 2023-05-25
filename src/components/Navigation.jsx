import React from "react";
import {
  CustomAppBar,
  CustomNavBar,
  CustomToolBar,
  NavIconCover,
} from "../styles";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

export const Navigation = () => {
  return (
    <>
      <CustomNavBar sx={{ flexGrow: 1 }} height={"150px"}>
        <CustomAppBar position="static">
          <CustomToolBar>
            <Typography sx={{ flexGrow: 1 }}>Jeko</Typography>
            <Stack
              direction={"row"}
              gap={"43px"}
              alignItems={"center"}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <NavLink
                exact
                className={"nav-item"}
                activeClassName="active"
                to={"/"}
              >
                <Typography color={"white"}>01 home</Typography>
              </NavLink>
              <NavLink
                className={"nav-item"}
                activeClassName="active"
                to={"/about"}
              >
                <Typography color={"white"}>02 about</Typography>
              </NavLink>
               
            </Stack>
            <Stack direction={"row"} gap={"10px"}>
              <NavIconCover sx={{ marginLeft: { xs: "0", lg: "30px" } }}>
                <FormatPaintIcon />
              </NavIconCover>
              <NavIconCover sx={{ display: { xs: "flex", lg: "none" } }}>
                <MenuIcon />
              </NavIconCover>
            </Stack>
          </CustomToolBar>
        </CustomAppBar>
      </CustomNavBar>
    </>
  );
};
const responsiveMenu = {
  position: "absolute",
  top: "0",
  left: "0",
  backgrund: "black",
  zIndex: "10",
};
