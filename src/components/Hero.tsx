import React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1300px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const RightSection = styled.div`
  flex: 3;
  position: relative;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 700px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h3`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 150px;
`;

const Hero = () => {

    return (
        <Section>
            <Navbar/>
            <Container>
                <LeftSection>
                    <Title>Lorem ipsum dolor sit amet.</Title>
                    <SubtitleWrapper>
                        <Line src="./public/images/line.png"/>
                        <Subtitle>Lorem ipsum dolor.</Subtitle>
                    </SubtitleWrapper>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, enim!</Desc>
                    <Button>Learn more.</Button>
                </LeftSection>
                <RightSection>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <directionalLight position={[3, 2, 1]}/>
                        <OrbitControls enableZoom={false}/>
                        <Sphere args={[1, 100, 200]} scale={2.2}>
                            <MeshDistortMaterial
                                color="#da4ea2"
                                attach="material"
                                distort={0.4}
                                speed={1.5}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src="./public/images/moon.png"/>
                </RightSection>
            </Container>
        </Section>
    );
};

export default Hero;