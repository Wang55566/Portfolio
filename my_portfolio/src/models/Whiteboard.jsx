import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React from "react";
import whiteboardScene from "../assets/3d/whiteboard.glb";
import HtmlMessage from "../components/HtmlMessage";

const Whiteboard = (props) => {
  const { nodes, materials } = useGLTF(whiteboardScene);
  return (
    <>
      <a.group {...props}>
        <group
          position={[-1.025, 0, -6.48]}
          rotation={[-Math.PI / 2, 0, -2.828]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Whiteboard__0.geometry}
              material={materials["Scene_-_Root"]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[100, 2.404, 87.916]}
            />
          </group>
        </group>
        <HtmlMessage />
      </a.group>
    </>
  );
};

export default Whiteboard;
