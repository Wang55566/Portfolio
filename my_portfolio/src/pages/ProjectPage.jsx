import React from "react";
import gameScreenShot from "../assets/project_pics/game_center.jpeg";
import toDoScreenShot from "../assets/project_pics/remember_that_flask.jpeg";
import tradeScreenShot from "../assets/project_pics/smartTrade.png";
import ProjectCard from "../components/ProjectCard";
import { Box, Flex } from '@chakra-ui/react'

const ProjectPage = () => {
  const project_list = [
    {
      src: gameScreenShot,
      decription: "Game Center",
      link_url: "https://game-center-sepia.vercel.app/",
    },
    {
      src: toDoScreenShot,
      decription: "Rember That Flask",
      link_url: "https://remember-that-flask.onrender.com/",
    },
    {
      src: tradeScreenShot,
      decription: "Trade Center",
      link_url: "https://newsmarttrade.onrender.com/",
    },
  ];

  return (
    <>
      <Flex justifyContent='space-around' margin={4}>
        {project_list.map((project) => (
          <Box key={project.decription}>
            <ProjectCard
              image_src={project.src}
              description={project.decription}
              link_url={project.link_url}
            />
          </Box>
        ))}

      </Flex>
    </>
  );
};

export default ProjectPage;
