import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Mac from "./Mac";
import styled from "styled-components";


const Desc = styled.div`
  width: 200px;
  height: 75px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 50px;
  color: #000;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;


const WebDesign = () => {
    return (
        <>
            <Canvas camera={{position: [1, 1, 1.5]}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[3, 2, 1]}/>
                <Suspense fallback={null}>
                    <Mac/>
                    <OrbitControls enableZoom={false} autoRotate/>
                </Suspense>
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ducimus itaque repellat sit, soluta
                veritatis.
            </Desc>
        </>
    );
};

export default WebDesign;