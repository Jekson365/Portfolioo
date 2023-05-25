import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <>
      <Grid container display={"flex"} alignItems={"center"} height={"130px"}>
        <Grid item sx={12} sm={6}>
          <Stack direction={"row"} spacing={10}>
            <Stack
              color={"white"}
              direction={"column"}
              alignItems={"flex-start"}
            >
              <Typography>Subscribe</Typography>
              <Typography>jeko.erg@gmail.com</Typography>
            </Stack>
            <Stack
              color={"white"}
              direction={"column"}
              alignItems={"flex-start"}
            >
              <Typography>Socials</Typography>
              <Typography fontWeight={"bold"}>
                <Link>Linkedin /</Link>
                <Link> Github</Link>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sx={12} sm={6} container>
          <GitHubIcon item sx={{ color: "white", fontSize: "40px" }} className="dsaas" />
          <LinkedInIcon item sx={{ color: "white", fontSize: "40px" }}  className="dsaas"/>
        </Grid>
      </Grid>
    </>
  );
};
