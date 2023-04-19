import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 75px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 300px;
  right: 50px;
  color: #000;

  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

const Development = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 15] }}>
                <Suspense fallback={null}>
                    <Atom />
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ducimus itaque repellat sit, soluta veritatis.
            </Desc>
        </>
    );
};

export default Development;