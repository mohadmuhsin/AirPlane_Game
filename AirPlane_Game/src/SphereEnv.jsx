import { useTexture } from "@react-three/drei";
import React from "react";
import { BackSide } from "three";

function SphereEnv() {
  const map = useTexture("textures/envmap.jpg");
  return (
    <mesh>
      <sphereGeometry args={[60 , 50 , 50 ]} />
      <meshBasicMaterial side={BackSide}  map={map} />
    </mesh>
  );
}

export default SphereEnv;
