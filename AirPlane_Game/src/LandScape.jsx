import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo } from "react";
import { Color, MeshStandardMaterial } from "three";

function LandScape(props) {
  const { nodes, materials } = useGLTF("model/scene.glb");
  const [lightsMaterial, WaterMaterial] = useMemo(() => {
    return [
      new MeshStandardMaterial({
        envMapIntensity: 0,
        color: new Color("#ea6619"),
        roughness: 0,
        metalness: 0,
        emissive: new Color("#f6390f").multiplyScalar(1),
      }),
      <MeshReflectorMaterial
        transparent={true}
        opacity={0.6}
        color={"#23281b"}
        roughness={0}
        blur={[10, 10]}
        mixBlur={1}
        mixStrength={20}
        mixContrast={1.2}
        resolution={512}
        mirror={0}
        depthScale={0}
        minDepthThreshold={0}
        maxDepthThreshold={0.1}
        depthToBlurRatioBias={0.0025}
        debug={0}
        reflectorOffset={0.0}
      />,
    ];
  }, []);

  useEffect(() => {
    console.log(materials, "materials of ");
    const landscapeMat = materials["Material.009"];
    landscapeMat.envMapIntensity = 0.75;

    const treesMat = materials["Material.008"];
    treesMat.color = new Color("#2f2f13");
    treesMat.envMapIntensity = 0.3;
    treesMat.roughness = 1;
    treesMat.metalness = 0;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.landscape_gltf.geometry}
        material={materials["Material.009"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.landscape_borders.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        geometry={nodes.trees_light.geometry}
        material={materials["Material.008"]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.lights.geometry}
        material={lightsMaterial}
        castShadow
      />
      <mesh
        position={[-2.536, 1.272, 0.79]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={[1.285, 1.285, 1]}
      >
        <planeGeometry args={[1, 1]} />
        {WaterMaterial}
      </mesh>
      <mesh
        position={[1.729, 0.943, 2.709]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={[3, 3, 1]}
      >
        <planeGeometry args={[1, 1]} />
        {WaterMaterial}
      </mesh>
      <mesh
        position={[0.415, 1.588, -2.275]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        scale={[3.105, 2.405, 1]}
      >
        <planeGeometry args={[1, 1]} />
        {WaterMaterial}
      </mesh>
    </group>
  );
}

export default LandScape;
