import React, {useRef, useState} from 'react';
import styled from "styled-components";
import Development from "../components/Development";
import WebDesign from "../components/WebDesign";
import ProductDesign from "../components/ProductDesign";
import SocialMedia from "../components/SocialMedia";
import Illustrations from "../components/Illustrations";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1350px) {
    height: 120vh;
  }
`;

const Container = styled.div`
  width: 1300px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1350px) {
    height: 70vh;
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li<any>`
  font-size: 75px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  position: relative;

  @media only screen and (max-width: 1350px) {
    font-size: 55px;
    text-align: center;
  }

  ::after {
    content: "${(props) => {
      return props.text;
    }}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    color: #ffffff;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }

    }
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const Works = () => {
    const list = useRef<string[]>([
        'Web Design',
        'Development',
        'Illustration',
        'Product Design',
        'Social Media'
    ]);
    const [work, setWork] = useState<string>("Web Design");

    return (
        <Section>
            <Container>
                <LeftSection>
                    <List>
                        {list.current.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>{item}</ListItem>
                        ))}
                    </List>
                </LeftSection>
                <RightSection>
                    {work === "Web Design" ? (
                        <WebDesign/>
                    ) : work === "Development" ? (
                        <Development/>
                    ) : work === "Product Design" ? (
                        <ProductDesign/>
                    ) : work === "Social Media" ? (
                        <SocialMedia/>
                    ) : (
                        <Illustrations/>
                    )}
                </RightSection>
            </Container>
        </Section>
    );
};

export default Works;