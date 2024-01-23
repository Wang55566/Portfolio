import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Mac from "../models/Mac";


const SkyIsland = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const adjustIsland = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, 43];
    let rotation = [1.3, 4.7, 1];

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [0.1, 0.1, 0.1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [screenScale, screenPosition, rotation] = adjustIsland();

  const canvasStyle = {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    cursor: isGrabbing ? "grabbing" : "grab",
  };

  return (
    <Box w="100%" h="100%" position="relative">
      <Canvas
        camera={{ near: 0.01, far: 1000 }}
        style={canvasStyle}
        onMouseDown={() => setIsGrabbing(!isGrabbing)}
        onMouseUp={() => setIsGrabbing(!isGrabbing)}
      >
        <Suspense>
          <directionalLight postion={[1, 3, 1]} intensity={4} />
          <ambientLight intersity={1} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky screenScale={[0.0, 0.0, 1.0]} />
          <Island
            scale={screenScale}
            postion={screenPosition}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Mac />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default SkyIsland;
