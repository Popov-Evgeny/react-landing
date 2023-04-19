import React, {Suspense} from 'react';
import styled from "styled-components";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1300px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1350px) {
    height: 100vh;
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  @media only screen and (max-width: 1350px) {
    display: none;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 1350px) {
    flex: 3;
  }
`;

const Title = styled.h2`
  font-size: 64px;

  @media only screen and (max-width: 1350px) {
    text-align: center;
  }
`;

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media only screen and (max-width: 1350px) {
    justify-content: center;
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

  @media only screen and (max-width: 1350px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  @media only screen and (max-width: 1350px) {
    margin: 0 auto;
  }
`;

const About = () => {

    return (
        <Section>
            <Container>
                <LeftSection>
                    <Canvas camera={{position: [5, 5, 5], fov: 25}}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[3, 2, 1]}/>
                            <Cube/>
                            <OrbitControls enableZoom={false} autoRotate/>
                        </Suspense>
                    </Canvas>
                </LeftSection>
                <RightSection>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipisicing..</Title>
                    <SubtitleWrapper>
                        <Line src="./public/images/line.png"/>
                        <Subtitle>Lorem ipsum dolor.</Subtitle>
                    </SubtitleWrapper>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolor fugit
                        sed.</Desc>
                    <Button>Learn more.</Button>
                </RightSection>
            </Container>
        </Section>
    );
};

export default About;