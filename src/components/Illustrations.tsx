import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import styled from "styled-components";
import Illustration from "./Illustration";


const Desc = styled.div`
  width: 200px;
  height: 75px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
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

const Illustrations = () => {
    return (
        <>
            <Canvas camera={{ position: [1, 2, 7] }}>
                <ambientLight intensity={1.5}/>
                <directionalLight position={[17, 15, 9]}/>
                <Suspense fallback={null}>
                    <Illustration/>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ducimus itaque repellat sit, soluta veritatis.
            </Desc>
        </>
    );
};

export default Illustrations;