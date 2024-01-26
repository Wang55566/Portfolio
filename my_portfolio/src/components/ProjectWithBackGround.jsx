import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import gameScreenShot from "../assets/projects/game_center.jpeg";
import toDoScreenShot from "../assets/projects/remember_that_flask.jpeg";
import tradeScreenShot from "../assets/projects/smartTrade.png";
import LivingRoom from "../models/LivingRoom";
import HtmlProjectButton from "./HtmlProjectButton";
import HtmlProjectCard from "./HtmlProjectCard";

const canvasStyle = {
  backgroundColor: "transparent",
  width: "100vw",
  height: "100vh",
};

const ProjectWithBackGround = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [image, setImage] = useState(gameScreenShot);
  const [description, setDescription] = useState("Game Center");
  const [url, setUrl] = useState("https://newsmarttrade.onrender.com/");

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
            <HtmlProjectButton
              options={{
                buttonText: "Game Center",
                image: gameScreenShot,
                description: "Explore Games!",
                url: "https://game-center-sepia.vercel.app/",
              }}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              position={[0, 2, 2]}
            />
            <HtmlProjectButton
              options={{
                buttonText: "Remember That Flask",
                image: toDoScreenShot,
                description: "Remember That Flask project description.",
                url: "https://remember-that-flask.onrender.com/",
              }}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              position={[1, 2, 2]}
            />
            <HtmlProjectButton
              options={{
                buttonText: "Trade Center",
                image: tradeScreenShot,
                description: "Trade Center Description",
                url: "https://newsmarttrade.onrender.com/",
              }}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              position={[2, 2, 2]}
            />
            <HtmlProjectCard
              image_src={image}
              description={description}
              link_url={url}
              position={[-2.7, 2, 1]}
            />
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default ProjectWithBackGround;
