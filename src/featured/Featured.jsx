import { Box, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image1 from "../assets/observer.png";
import Image2 from "../assets/tictactoe.png";
import Image3 from "../assets/g.png";
import Image4 from "../assets/birthday.png";
import Image5 from "../assets/cuisine.png";
import Image6 from "../assets/movies.png";
import Image7 from "../assets/cover-7.png";
import Image8 from "../assets/mupando.png";
import Image9 from "../assets/dozai.png";
import Image10 from "../assets/nyumba.png";
import Image11 from "../assets/beog.png";
import Image12 from "../assets/system.png";
import Image13 from "../assets/analasad.png";
import React from "react";
import "aos/dist/aos.css";
import { CustomButton } from "../styles";
import { Link } from "react-router-dom";

export const Featured = () => {
  const projects = [
    {
      name: "Observer",
      description: "Simulation which is created with Javascript canvas",
      img: Image1,
      demo: "https://jekson365.github.io/PortfolioApp/observer/home.html",
      source: "https://github.com/Jekson365/PortfolioApp/tree/main/observer",
      tools: ["./assets/js.png", "./assets/html.png"],
    },
    {
      name: "Tic Tac Toe",
      description:
        "most famous game propably. with this project I wanted to develope my skills in Javascript. I built it using HTML / CSS and JS",
      img: Image2,
      demo: "https://jekson365.github.io/PortfolioApp/TicTacToe/index.html",
      source: "https://github.com/Jekson365/PortfolioApp/tree/master/TicTacToe",
      tools: ["./assets/js.png", "./assets/html.png"],
    },
    {
      name: "Landing Page",
      description: "design from Nicepage.com",
      img: "https://jekson365.github.io/p1/g/assets/cover.jpeg",
      demo: "https://jekson365.github.io/p1/g/",
      source: "https://github.com/Jekson365/p1",
      tools: ["./assets/js.png", "./assets/html.png", "./assets/bootstrap.png"],
    },
    {
      name: "Birthday Part Website",
      description:
        "Creating with HTML / CSS / Bootstrap and React JS. Design is takan from Nicepage.com",
      img: "https://jekson365.github.io/Birthday-party/static/media/cover.eaf679c1c563ea4e98d3.jpeg",
      demo: "https://jekson365.github.io/Birthday-party/",
      source: "https://github.com/Jekson365/Birthday-party",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Recipies App",
      description:
        "Application is built in React. I am using https://spoonacular.com/ API for it. Application has 2 pages. Discover and home.",
      img: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demo: "https://jekson365.github.io/Recipies-App/",
      source: "https://github.com/Jekson365/Recipies-App",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Cinema App",
      description:
        "Application is built in React. Using themoviedb API. it contains 4 pages: Discover,Home,Registration and Login.Libraries I used: styled components,React router,bootstrap,react-icons",
      img: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      demo: "https://jekson365.github.io/MoviePage/#/",
      source: "https://github.com/Jekson365/MoviePage",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Shopify template",
      description:
        "website template is picked from shopify.built in react. (not completed yet)",
      img: "https://images.pexels.com/photos/1300571/pexels-photo-1300571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demo: "https://jekson365.github.io/ShopifyTemplates/",
      source: "https://github.com/Jekson365/mupando",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Mupando Clone",
      description:
        "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos",
      img: "https://uploads-ssl.webflow.com/632872dd89964e9ebf491700/63287af870bf8d0f2bb1da79_kam-idris-_HqHX3LBN18-unsplash-p-800.webp",
      demo: "https://jekson365.github.io/mupando/",
      source: "https://github.com/Jekson365/Birthday-party",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Dozai Clone",
      description:
        "Coded with ReactJS. I used libraries such as: React router dom,react-icons,framer-motion,aos. for styling SASS",
      img: "https://assets.website-files.com/62e7dd8eb96f150931bf8901/633de349ae424383a2e10038_Smiling-Girl-p-500.png",
      demo: "https://jekson365.github.io/dozai/",
      source: "https://github.com/Jekson365/Dozai ",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Nyumba Clone",
      description:
        "webflow.io website template clone.coded in React-JS using libraries such as Bootstrap,SASS,AOS,framer-motion",
      img: "https://uploads-ssl.webflow.com/62fa81dfa1e5c446a25769a5/62fa82c5757b1331fde6d61d_john-fornander-Id7u0EkTjBE-unsplash-p-500.jpg",
      demo: "https://jekson365.github.io/nyumba",
      source: "https://github.com/Jekson365/nyumba",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Beog Clone",
      description:
        "webflow.io website template clone.coded in React-JS using libraries such as Bootstrap,SASS,AOS,framer-motion",
      img: "https://assets.website-files.com/63d6118fac19915fe3a7b107/63d615d65236772a992900be_blog-01.jpg",
      demo: "https://6421b7962d1024096b65afbe--incandescent-daifuku-cad413.netlify.app/",
      source: "https://github.com/Jekson365/beog.git",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "user Managment system",
      description:
        "programm gives you opportunite to manage users by adding,deleting,editing them. some more features this softwares is that...",
      img: Image12,
      demo: "https://642babdc88895555b06a3fac--graceful-souffle-f20f52.netlify.app/",
      source: "https://github.com/Jekson365/javascript-project",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Analytics Page",
      description:
        "MY first project using Material-UI. I just created simple visual to demonstrate what I learned in past one week. Tools and Libraries I Used are: React,Typescript,Material-UI,recharts,react-reveal",
      img: Image13,
      demo: "https://64672428bfe24a4f7b9070ec--ubiquitous-dieffenbachia-8b8a82.netlify.app/",
      source: "https://github.com/Jekson365/constClone",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Oberon Blog",
      description:
        "MY Second project using Material-UI. Tools and Libraries I Used are: React,Typescript,Material-UI,recharts,react-reveal",
      img: "https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a4b516f8db6e392c8d78_thumbnail_13.jpg",
      demo: "https://fantastic-unicorn-42b03c.netlify.app/",
      source: "https://github.com/Jekson365/Oberon",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
    {
      name: "Ecommerce Website",
      description:
        "Not completed project",
      img: "https://uploads-ssl.webflow.com/62cc90f51e0f22934c772848/62ccdad735539c3447129bc4_toa-heftiba-FV3GConVSss-unsplash%20(1)-p-2000.jpeg",
      demo: "https://647d8f083306803b3a2c999e--teal-crumble-60ba09.netlify.app/",
      source: "https://github.com/Jekson365/EcommerceWebsite",
      tools: [
        "./assets/js.png",
        "./assets/html.png",
        "./assets/atom.png",
        "./assets/bootstrap.png",
      ],
    },
  ];
  return (
    <>
      <Grid mt={13}>
        <Typography
          textAlign={"left"}
          variant="h3"
          color={"white"}
          fontFamily={"serif"}
        >
          Projects
        </Typography>
        <Grid container columns={12} spacing={7} mt={0}>
          {projects.reverse().map((each) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={3}
                item
                data-aos-duration="1000"
                data-aos="fade-right"
              >
                <Box
                  maxWidth={"100%"}
                  height={"300px"}
                  sx={{
                    backgroundImage: `url('${each.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                  }}
                  borderRadius={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  position={"relative"}
                  className="das"
                >
                  <Box p={1} sx={{ zIndex: "100" }}>
                    <Typography
                      variant="h6"
                      className="dasdsadaa"
                      color={"white"}
                    >
                      {each.name}
                    </Typography>
                  </Box>
                  <Box
                    pl={2}
                    pb={2}
                    display={"flex"}
                    alignItems={"center"}
                    color={"white"}
                    gap={"10px"}
                    sx={{ zIndex: "100" }}
                  >
                    <Link to={each.demo} target="_blank">
                      <CustomButton>Demo</CustomButton>
                    </Link>
                    <Link to={each.source}  target="_blank">
                      <CustomButton>Source</CustomButton>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
