/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/Modelos/Laptop.glb')
  return (
    <group {...props} dispose={null}>
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
       {/*  <Html transform style={{ width:"916px", height:"647px", marginTop:"-5px", overflow:"hidden", borderRadius:"23px 23px 0 0"}} position={[0, 12.851, -5.38028]}>
          <h1>Mendoza</h1>
        </Html> */}
        <Html className='pantallaLaptop' occlude transform style={{ width:"916px", height:"647px", marginTop:"-5px", overflow:"hidden", borderRadius:"23px 23px 0 0"}} position={[0, 12.851, -5.38028]}>
          <h1>Este proyecto esta en construcción</h1>
          <small style={{fontSize:"16px"}}>Lenin Mendoza</small>
        </Html>
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
