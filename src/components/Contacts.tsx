import React from 'react';
import styled from "styled-components";
import Map from "./Map";

const Contacts = () => {

    const Section = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
    `;

    const Container = styled.div`
      width: 100%;
      height: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      gap: 50px;
    `;

    const LeftSection = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `;

    const Title = styled.h3`
      font-size: 24px;
      font-weight: 200;
    `;

    const Form = styled.form`
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;

    const Input = styled.input`
      padding: 20px;
      background-color: #eeeeee;
      border: none;
      border-radius: 5px;
      
    `;

    const TextArea = styled.textarea`
      padding: 20px;
      background-color: #eeeeee;
      border: none;
      border-radius: 5px;
        
    `;

    const Button = styled.button`
      background-color: #da4ea2;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      padding: 15px;
    `;

    const RightSection = styled.div`
      flex: 1;
    `;

    return (
        <Section>
            <Container>
                <LeftSection>
                    <Form>
                        <Title>Contact us</Title>
                        <Input placeholder="Name"/>
                        <Input placeholder="Emial"/>
                        <TextArea placeholder="Write your message" rows={10}/>
                        <Button>Send</Button>
                    </Form>
                </LeftSection>
                <RightSection>
                    <Map/>
                </RightSection>
            </Container>
        </Section>
    );
};

export default Contacts;