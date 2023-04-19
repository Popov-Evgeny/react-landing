import React from 'react';
import styled from "styled-components";

const Navbar = () => {

    const Section = styled.div`
      display: flex;
      justify-content: center;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    `;

    const Container = styled.div`
      width: 1300px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
      }
    `;

    const Links = styled.div`
      display: flex;
      align-items: center;
      gap: 50px;
    `;

    const Logo = styled.img`
      height: 70px;
      width: 70px;
    `;

    const List = styled.ul`
      display: flex;
      gap: 20px;
      list-style: none;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    `;

    const ListItem = styled.li`
      cursor: pointer;
    `;

    const Icons = styled.div`
      display: flex;
      align-items: center;
      gap: 20px;
    `;

    const Icon = styled.img`
      width: 20px;
      cursor: pointer;
    `;

    const Button = styled.button`
      width: 100px;
      padding: 10px;
      background-color: #da4ea2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    `;

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./images/search.png"/>
                    <Button> Hire Now </Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;