import styled from "styled-components";
import Hero from "./containers/Hero";
import Works from "./containers/Works";
import Contacts from "./containers/Contacts";
import About from "./containers/About";
import './App.css';

function App() {

    const Container = styled.div`
      height: 100vh;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
      color: #fff;
      background: url("./images/bg.jpeg");

      &::-webkit-scrollbar {
        display: none;
      }
    `;

    return (
        <Container>
            <Hero/>
            <About/>
            <Works/>
            <Contacts/>
        </Container>
    )
}

export default App
