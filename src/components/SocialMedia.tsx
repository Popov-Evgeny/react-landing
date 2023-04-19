import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import styled from "styled-components";
import Media from "./Media";


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

const SocialMedia = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 1, 20] }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[3, 2, 1]}/>
                <Suspense fallback={null}>
                    <Media/>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ducimus itaque repellat sit, soluta veritatis.
            </Desc>
        </>
    );
};

export default SocialMedia;