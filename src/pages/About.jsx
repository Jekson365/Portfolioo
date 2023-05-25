import React from "react";
import { Typography, Grid, Stack } from "@mui/material";
import styled from "@emotion/styled";

export const About = () => {
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
          HELLO, MY NAME IS MAX
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
   
           
          Innovative Front End Developer with 2 years experience building and
          maintaining responsive layouts for both mobile and desktop Expertise
          in HTML,CSS(SASS), (ES6 + OOP) and modern libraries and
           
          frameworks such as ReactJS and Bootstrap.
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
