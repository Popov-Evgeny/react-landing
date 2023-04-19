import React from 'react'
import {useGLTF} from '@react-three/drei'

// @ts-ignore
export default function Illustration (props) {
  // @ts-ignore
    const { nodes, materials } = useGLTF('/illustration-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh geometry={nodes['Hedra001_Material_#0_0'].geometry} material={materials.Material_0} position={[-0.62, 0, 3.48]} rotation={[-Math.PI / 2, 0, 0]} scale={0.64} />
      </group>
    </group>
  )
}

useGLTF.preload('/illustration-transformed.glb')
