import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import MacScene from "../assets/3d/macbook_pro_2021.glb";
import useStore from "../store";

const Mac = (props) => {
  const { nodes, materials } = useGLTF(MacScene);
  const MacGroup = useRef();
  const [isRotating, setIsRotating] = useState(true);
  const { message, setMessage } = useStore();

  const handleOnClick = () => {
    setIsRotating((prev) => !prev);
    if (message === "Click to stop Mac rotation.") {
      setMessage("Click to start Mac rotation.");
    } else {
      setMessage("Click to stop Mac rotation.");
    }
  };

  const handleMouseOver = () => {
    if (isRotating) {
      setMessage("Click to stop Mac rotation.");
    } else {
      setMessage("Click to start Mac rotation.");
    }
  };

  const handleMouseOut = () => {
    setMessage("Welcome to My Portfolio!");
  };

  useFrame((state, delta) => {
    if (isRotating) MacGroup.current.rotation.y += 0.4 * delta;
  });

  return (
    <a.group
      ref={MacGroup}
      {...props}
      onClick={handleOnClick}
      onPointerOver={handleMouseOver}
      onPointerOut={handleMouseOut}
    >
      <group position={[0.121, 0.007, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </a.group>
  );
};

export default Mac;
