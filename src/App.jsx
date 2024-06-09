import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./components/Laptop";
import Luces from "./components/Luces";
import * as THREE from "three"
import useWindowSize from "./utils/useWindowSize";

function App() {
  const [width, height] = useWindowSize();
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
        style={{ width: '100%', height: '100%' }}
      >
        <Laptop />
        <Luces />
        <OrbitControls target={[0, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App;
