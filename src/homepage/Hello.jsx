import styled from "@emotion/styled";
import { Typography, Grid, Stack } from "@mui/material";
import React from "react";

export const Hello = () => {
  return (
    <>
      <Stack
        gap="0px"
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        direction={"column"}
        sx={{ height: { xs: "300px", lg: "430px" } }}
      >
        <HelloStyles>HELLO, MY NAME IS MAX</HelloStyles>
        <TitleStyles sx={{ fontSize: { xs: "60px", lg: "100px" } }}>
          I make websites
        </TitleStyles>
        <DescStyles
          sx={{
            fontSize: { xs: "22px", lg: "30px" },
            marginTop: { xs: "0", lg: "30px" },
          }}
        >
          I’m a front-end developer and co-founder of{" "}
          <span className="item item-1">Codista</span>, a software studio in
          Vienna. I also write about the web on my{" "}
          <span className="item item-2">blog </span>and{" "}
          <span className="item item-3">elsewhere.</span>
        </DescStyles>
      </Stack>
    </>
  );
};

const HelloStyles = styled(Typography)({
  color: "#ff5277",
  letterSpacing: "3px",
});
const TitleStyles = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  fontFamily: "serif",
});
const DescStyles = styled(Typography)({
  fontSize: "30px",
  color: "white",
  fontWeight: "100",
  marginTop: "50px",
});
