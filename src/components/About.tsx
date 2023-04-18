import React from 'react';
import styled from "styled-components";

const About = () => {

    const Section = styled.div`
      height: 100vh;
      background-color: wheat;
      scroll-snap-align: center;
      
    `

    return (
        <Section>
            About
        </Section>
    );
};

export default About;