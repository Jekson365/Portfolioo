import React from "react";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { SiTypescript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiMui } from 'react-icons/si'
import { DiMongodb, DiCss3 } from 'react-icons/di'
import GitHubIcon from '@mui/icons-material/GitHub';
import { AiFillHtml5 } from 'react-icons/ai'
import Zoom from '@mui/material/Zoom';
import { CgFigma } from 'react-icons/cg'


import { Grid, Box, Typography } from "@mui/material";

export const Skills = () => {
  const skillSet = [
    {
      name: "HTML",
      icon: <AiFillHtml5 />,
      color: "#f06529"
    },
    {
      name: "CSS",
      icon: <DiCss3 />,
      color: "#264de4"
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
      color: "#F7DF1E"
    },
    {
      name: "ReactJS",
      icon: <FaReact />,
      color: "#61DAFB"
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
      color: "#007ACC"
    },
    {
      name: "Material-UI",
      icon: <SiMui />,
      color: "#0081CB"
    },
    {
      name: "Sass",
      icon: <DiSass />,
      color: "#CC6699"
    },
    {
      name: "Node",
      icon: <FaNodeJs />,
      color: "#339933"
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "black"
    },
    {
      name: "mongoDB",
      icon: <DiMongodb />,
      color: "#47A248"
    },
    {
      name: "Github",
      icon: <GitHubIcon />,
      color: "black"
    },
    {
      name: "AdobeXD",
      icon: <SiAdobexd />,
      color: "#FF61F6"
    },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator />,
      color: "#FF9A00"
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "#31A8FF"
    },
    {
      name: "Figma",
      icon: <CgFigma />,
      color: "#A259FF"
    },
  ];
  return <>
    <Typography variant="h4" mb={5}
      fontFamily={'serif'}
      color={'white'}>Skillset</Typography>
    <Grid container spacing={3} flexWrap={'wrap'}>
      {skillSet.map((each) => {
        return (
          <>
            <Zoom in={true} timeout={1000}>
              <Grid
                spacing={5}
                item
                xs={6}
                sm={4}
                md={3}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  borderRadius={10}
                  height={'50px'}
                  width={'100%'}
                  bgcolor={each.color}
                  color={'white'}
                  gap={'15px'}
                >
                  {each.name}
                  <Typography fontSize={'30px'} mt={1}>
                    {each.icon}
                  </Typography>
                </Box>
              </Grid>
            </Zoom>
          </>
        )
      })}
    </Grid>
  </>;
};
