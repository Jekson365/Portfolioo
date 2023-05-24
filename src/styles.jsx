import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const CustomNavBar = styled(Box)({
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
});
export const CustomAppBar = styled(AppBar)({
  boxShadow: "0 0 0 0",
  background: "transparent",
});
export const CustomToolBar = styled(Toolbar)({
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
});
export const NavIconCover = styled(Box)({
  background: "#282828",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
});
