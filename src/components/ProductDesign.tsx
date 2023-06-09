import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import styled from "styled-components";
import Shoe from "./Shoe";
import Mac from "./Mac";

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

  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

const ProductDesign = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[3, 2, 1]}/>
                <Suspense fallback={null}>
                    <Shoe/>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ducimus itaque repellat sit, soluta veritatis.
            </Desc>
        </>
    );
};

export default ProductDesign;