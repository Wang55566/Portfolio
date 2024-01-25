import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import MacScene from "../assets/3d/macbook_pro_2021.glb";

const Mac = (props) => {
  const { nodes, materials } = useGLTF(MacScene);
  const MacGroup = useRef();
  const [isRotating, setIsRotating] = useState(true);

  const handleOnMouseDown = () => {
    setIsRotating((prev) => !prev);
  };

  const handleOnMouseUp = () => {
    setIsRotating((prev) => !prev);
  };

  useFrame((state, delta) => {
    if (isRotating) MacGroup.current.rotation.y += 0.4 * delta;
  });

  return (
    <a.group
      ref={MacGroup}
      {...props}
      onPointerDown={handleOnMouseDown}
      onPointerUp={handleOnMouseUp}
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
