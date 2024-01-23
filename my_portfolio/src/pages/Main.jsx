import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import MainPageContent from "../components/MainPageContent";
import LivingRoom from "../models/LivingRoom";
import Mac from "../models/Mac";
import ContactInfo from "../components/ContactInfo";

const Main = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const canvasStyle = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    cursor: isGrabbing ? "grabbing" : "grab",
  };

  const handleOnMouseUp = () => {
    setIsGrabbing((prevState) => !prevState);
    setIsRotating(true);
  };

  const handleOnMouseDown = () => {
    setIsGrabbing((prevState) => !prevState);
    setIsRotating(false);
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
      h="100%"
      position="relative"
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
          <Mac
            scale={window.innerWidth < 768 ? [5, 5, 5] : [8, 8, 8]}
            position={[0, -0.2, 0]}
            rotation={[1.0, 1.0, -0.5]}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            isRotating={isRotating}
          />
          <MainPageContent position={[-7.1, 3.7, 0]} />
          <ContactInfo position={[5, 0.2, 0]}/>
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Main;
