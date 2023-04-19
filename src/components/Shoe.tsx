import React from 'react'
import {useGLTF} from '@react-three/drei'

// @ts-ignore
export default function Shoe(props) {
  // @ts-ignore
    const { nodes, materials } = useGLTF('/shoe-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Blue_Vans_Shoe} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shoe-transformed.glb')
