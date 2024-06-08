import React from 'react'

const Luces = () => {
  return (
    <>
        <directionalLight position={[10,10,10]} color={"#ffffff"} intensity={1.3}/>
        <ambientLight intensity={0.5} color={"#ffffff"}/>
    </>
  )
}

export default Luces