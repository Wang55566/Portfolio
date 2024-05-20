import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ContactInfo from "../components/HtmlContactInfo";
import MainPageContent from "../components/HtmlMainContent";
import LivingRoom from "../models/LivingRoom";
import Mac from "../models/Mac";
import Whiteboard from "../models/Whiteboard";

const Main = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const boxStyle = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 3.2s ease-in-out",
    cursor: isGrabbing ? "grabbing" : "grab",
  };

  const canvasStyle = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  };

  const handleOnMouseUp = () => {
    setIsGrabbing((prev) => !prev);
  };

  const handleOnMouseDown = () => {
    setIsGrabbing((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w="100vw"
      h="100vh"
      style={boxStyle}
      onMouseUp={handleOnMouseUp}
      onMouseDown={handleOnMouseDown}
    >
      <Canvas camera={{ near: 0.01, far: 1000 }} style={canvasStyle}>
        <Suspense>
          <directionalLight position={[1, 3, 1]} intensity={4} />
          <ambientLight intensity={1} />
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
          <Mac
            scale={window.innerWidth < 768 ? [5, 5, 5] : [9, 9, 9]}
            position={[0, -0.2, -2]}
            rotation={[1.0, 1.0, -0.5]}
          />
          <Whiteboard scale={[0.014, 0.013, 0.001]} position={[5.2, 3.1, -2]} />
          <MainPageContent
            position={
              window.innerWidth < 768 ? [-0.5, 3.2, -2] : [-7.1, 4.6, -2]
            }
          />
          <ContactInfo position={[4.6, 0.2, -2]} />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Main;
