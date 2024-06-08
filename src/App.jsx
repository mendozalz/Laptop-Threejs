import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./components/Laptop";
import Luces from "./components/Luces";
import * as THREE from "three"

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 6, 25],
        fov: 65,
      }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 3.4
      }}
    >
      <Laptop />
      <Luces />
      <OrbitControls target={[0, 5, 1]} />
    </Canvas>
  );
}

export default App;
