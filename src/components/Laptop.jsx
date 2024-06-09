
import { Html, useGLTF } from '@react-three/drei'
import HtmlComponent from './Html'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/Modelos/Laptop.glb')
  const meshRef = useRef();

  useFrame(({ camera, size }) => {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  });
  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
      >
        <Html
        className="imagenLaptop"
        transform
        style={{
          width: "916px",
          height: "647px",
          marginTop: "-5px",
          overflow: "hidden",
          borderRadius: "23px 23px 0 0",
          display:"grid",
          placeItems: "center"
        }}
        position={[0, 12.851, -5.38028]}
      ><img style={{transform:"rotateY(180deg)"}} src="./LENIN_PNG_Mesa de trabajo 1.png"/></Html>
       <HtmlComponent/>
      </mesh>
      <mesh
        name="Teclas"
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        name="Touchpad"
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        name="TouchpadBtns"
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
      <mesh
        name="Plane005"
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        name="Plane005_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
    </group>
  )
}

useGLTF.preload('/Modelos/Laptop.glb')
