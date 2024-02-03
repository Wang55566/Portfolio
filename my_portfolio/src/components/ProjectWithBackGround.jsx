import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import gameScreenShot from "../assets/projects/game_center.jpeg";
import toDoScreenShot from "../assets/projects/remember_that_flask.jpeg";
import tradeScreenShot from "../assets/projects/smartTrade.png";
import LivingRoom from "../models/LivingRoom";
import HtmlProjectButton from "./HtmlProjectButton";
import HtmlProjectCard from "./HtmlProjectCard";
import { Html } from "@react-three/drei";

const canvasStyle = {
  backgroundColor: "transparent",
  width: "100vw",
  height: "100vh",
};

const ProjectWithBackGround = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState("Game Center");
  const [image, setImage] = useState(gameScreenShot);
  const [description, setDescription] = useState(
    "This comprehensive game info website serves as a rich and detailed resource for video game enthusiasts. The platform is dedicated to providing up-to-date information on a wide variety of video games across multiple platforms, including PC, PlayStation, Xbox, Nintendo Switch, mobile devices, and more."
  );
  const [url, setUrl] = useState("https://game-center-sepia.vercel.app/");
  const [repo, setRepo] = useState("https://github.com/Wang55566/Portfolio");

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
                title: "Game Center",
                image: gameScreenShot,
                description:
                  "This comprehensive game info website serves as a rich and detailed resource for video game enthusiasts. The platform is dedicated to providing up-to-date information on a wide variety of video games across multiple platforms, including PC, PlayStation, Xbox, Nintendo Switch, mobile devices, and more.",
                url: "https://game-center-sepia.vercel.app/",
                repo: "https://github.com/Wang55566/Video-Game-Center/",
              }}
              setTitle={setTitle}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              setRepo={setRepo}
              position={[-5.8, 3, -2]}
            />
            <HtmlProjectButton
              options={{
                title: "Remember That Flask",
                image: toDoScreenShot,
                description:
                  "Users of Remember That Flask have the flexibility to create multiple task lists. Tasks within these lists can be customized with various details, including the option to edit and add specific fields. It is useful to organized a lot of tasks in daily life.",
                url: "https://remember-that-flask.onrender.com/",
                repo: "https://github.com/sarahmoore19/RememberThatFlask/",
              }}
              setTitle={setTitle}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              setRepo={setRepo}
              position={[-5.8, 4, -2]}
            />
            <HtmlProjectButton
              options={{
                title: "Trade Center",
                image: tradeScreenShot,
                description:
                  "This stock trading app empowers investors to explore investable securities like stocks, ETFs, and more directly from their mobile devices. Users can access comprehensive information, including news updates, company histories, and backgrounds, providing a holistic view of potential investment opportunities.",
                url: "https://newsmarttrade.onrender.com/",
                repo: "https://github.com/Wang55566/SmartTrade/",
              }}
              setTitle={setTitle}
              setImage={setImage}
              setDescription={setDescription}
              setUrl={setUrl}
              setRepo={setRepo}
              position={[-5.8, 2, -2]}
            />
            <Html>
              <div
                style={{
                  position: "absolute",
                  whiteSpace: "nowrap",
                  bottom: "41vh",
                  right: "15vw",
                  color: "#4169E1",
                  fontSize: "1.5vw",
                  fontFamily: "Oswald",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                <h1>Please Select a Project</h1>
              </div>
            </Html>
            <HtmlProjectCard
              title={title}
              image_src={image}
              description={description}
              link_url={url}
              repo={repo}
              position={[-3.5, 4.2, -2]}
            />
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default ProjectWithBackGround;
