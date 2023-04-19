import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import styled from "styled-components";
import Map from "./Map";

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

const Text = styled.p`
  font-size: 16px;
  font-weight: 200;
  text-align: center;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Contacts = () => {

    const [success, setSuccess] = useState<boolean | null>(null);
    const form = useRef<HTMLFormElement | any>(null);

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_me9g7t1', 'template_w5wnd14', form.current, 'ja1NNE33VLXzFnp-_')
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                setSuccess(false);
            });

        form.current.reset();

        setTimeout(() => {
            setSuccess(null);
        }, 3000);
    }

    return (
        <Section>
            <Container>
                <LeftSection>
                    <Form ref={form} onSubmit={handelSubmit}>
                        <Title>Contact us</Title>
                        <Input placeholder="Name" name="name" type="text" required/>
                        <Input placeholder="Email" name="email" type="email" required/>
                        <TextArea placeholder="Write your message" name="message" required rows={10}/>
                        <Button type="submit">Send</Button>
                        {success && (<Text>Your message has been sent!</Text>)}
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