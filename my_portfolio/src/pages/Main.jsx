import { Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import LivingRoom from "../models/LivingRoom";
import Mac from '../models/Mac';
import MainPageContent from '../components/MainPageContent';

const Main = () => {

  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const canvasStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    cursor: isGrabbing ? "grabbing" : "grab",
  }

  const handleOnMouseUp = () => {
    setIsGrabbing(prevState => !prevState);
    setIsRotating(true);
  }

  const handleOnMouseDown = () => {
    setIsGrabbing(prevState => !prevState);
    setIsRotating(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Box w='100%' h='100%' position='relative'style={{
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 3s ease-in-out'
    }}>
      <Canvas
        camera={{ near:0.01, far:1000}}
        style={canvasStyle}
      >
        <Suspense>
          <directionalLight postion={[1, 3, 1]} intensity={4} />
          <ambientLight intersity={1}/>
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={2}/>
          <LivingRoom
            scale={[0.002, 0.002, 0.002]}
            rotation={[2.0,3.0,0.5]}
          />
          <Mac
            scale={window.innerWidth < 768 ? [5, 5, 5] : [8, 8, 8]}
            position={[0,-0.2,0]}
            rotation={[1.0,1.0,-0.5]}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            isRotating={isRotating}
          />
          <MainPageContent position={[6,0,0]}/>
        </Suspense>
      </Canvas>
    </Box>
  )
}

export default Main
