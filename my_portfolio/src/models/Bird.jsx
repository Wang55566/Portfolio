import React from 'react'
import { useGLTF } from "@react-three/drei";
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {

  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh scale={[0.005, 0.005, 0.005]} postion={[-5, -2, -1]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
