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
        <HelloStyles data-aos="fade-down" data-aos-duration="1000">
          HELLO, MY NAME IS JEKO
        </HelloStyles>
        <TitleStyles
          data-aos="fade-down"
          data-aos-duration="1500"
          sx={{ fontSize: { xs: "60px", lg: "100px" } }}
        >
          I make websites
        </TitleStyles>
        <DescStyles
          data-aos="fade-down"
          data-aos-duration="2000"
          sx={{
            fontSize: { xs: "22px", lg: "30px" },
            marginTop: { xs: "0", lg: "30px" },
          }}
        >
          {/* <span className="item item-1">Codista</span>, */}
          I’m a self-taught developer.I started learning in 2020. since then
          I am trying to learn new things day by day. I am Interested in Back-end developement and graphic deisign.
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
