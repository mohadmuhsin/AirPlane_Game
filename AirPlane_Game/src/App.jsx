import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import SphereEnv from "./SphereEnv";
import LandScape from "./LandScape";
import { useThree } from "@react-three/fiber";
import { Airplane } from "./Airplane";
import Target from "./Target";
import { EffectComposer } from "@react-three/postprocessing";
import { HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
// import { MotionBlur } from "./MotionBlur";

function App() {
  const { camera } = useThree();
  console.log(camera, "CAMERA");
  return (
    <>
      <SphereEnv />
      <Environment background={false} files={"textures/envmap.hdr"} />
      <PerspectiveCamera position={[0, 5, 10]} makeDefault />
      {/* <OrbitControls target={[0, 0, 0]} /> */}
      <LandScape />.
      <Airplane />
      <Target />
      {/* light act as sun */}
      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={2}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />
      <EffectComposer>
        {/* <MotionBlur/> */}
        <HueSaturation
          blendFunction={BlendFunction.NORMAL}
          hue={-0.15}
          saturation={0.1}
        />
      </EffectComposer>
    </>
  );
}

export default App;
