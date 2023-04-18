import React from 'react';
import styled from "styled-components";

const Contacts = () => {

    const Section = styled.div`
      height: 100vh;
      background-color: rosybrown;
      scroll-snap-align: center;
    `

    return (
        <Section>
            Contacts
        </Section>
    );
};

export default Contacts;