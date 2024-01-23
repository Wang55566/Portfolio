import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React from "react";
import LivingRoomScene from "../assets/3d/living_room.glb";

const LivingRoom = (props) => {
  const { nodes, materials } = useGLTF(LivingRoomScene);
  return (
    <a.group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_Artwork_0.geometry}
        material={materials.Artwork}
      />
    </a.group>
  );
};

export default LivingRoom;
