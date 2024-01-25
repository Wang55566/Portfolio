import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import gameScreenShot from "../assets/projects/game_center.jpeg";
import toDoScreenShot from "../assets/projects/remember_that_flask.jpeg";
import tradeScreenShot from "../assets/projects/smartTrade.png";
import LivingRoom from "../models/LivingRoom";
import HtmlProjectCard from "./HtmlProjectCard";

const canvasStyle = {
  backgroundColor: "transparent",
  width: "100vw",
  height: "100vh",
};

const project_list = [
  {
    src: gameScreenShot,
    decription: "Game Center",
    link_url: "https://game-center-sepia.vercel.app/",
  },
  {
    src: toDoScreenShot,
    decription: "Remember That Flask",
    link_url: "https://remember-that-flask.onrender.com/",
  },
  {
    src: tradeScreenShot,
    decription: "Trade Center",
    link_url: "https://newsmarttrade.onrender.com/",
  },
];

const ProjectWithBackGround = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box
        w="100%"
        h="100%"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 3s ease-in-out",
        }}
      >
        <Canvas camera={{ near: 0.01, far: 1000 }} style={canvasStyle}>
          <Suspense>
            <directionalLight position={[1, 3, 1]} intensity={4} />
            <ambientLight intersity={1} />
            <pointLight />
            <spotLight />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={2}
            />
            <LivingRoom
              scale={[0.002, 0.002, 0.002]}
              rotation={[2.0, 3.0, 0.5]}
            />
            <HtmlProjectCard
              image_src={gameScreenShot}
              description="Game Center"
              link_url="https://game-center-sepia.vercel.app/"
              position={[-6, 2, 1]}
            />
            <HtmlProjectCard
              image_src={toDoScreenShot}
              description="Remember That Flask"
              link_url="https://remember-that-flask.onrender.com/"
              position={[-2, 2, 1]}
            />
            <HtmlProjectCard
              image_src={tradeScreenShot}
              description="Trade Center"
              link_url="https://newsmarttrade.onrender.com/"
              position={[2, 2, 1]}
            />
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default ProjectWithBackGround;
