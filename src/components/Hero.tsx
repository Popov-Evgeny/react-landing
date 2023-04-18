import React from 'react';
import styled from "styled-components";

const Hero = () => {

    const Section = styled.div`
      height: 100vh;
      background-color: rebeccapurple;
      scroll-snap-align: center;
    `

    return (
        <Section>
            Hero
        </Section>
    );
};

export default Hero;