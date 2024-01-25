import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import MacScene from "../assets/3d/macbook_pro_2021.glb";

const Mac = (props) => {
  const { nodes, materials } = useGLTF(MacScene);
  const MacGroup = useRef();
  const [isRotating, setIsRotating] = useState(true);

  const handleOnClick = () => {
    setIsRotating((prev) => !prev);
    console.log('clicked')
  };

  useFrame((state, delta) => {
    if (isRotating) MacGroup.current.rotation.y += 0.4 * delta;
  });

  return (
    <a.group
      ref={MacGroup}
      {...props}
      onClick={handleOnClick}
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
