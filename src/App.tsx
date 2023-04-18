import styled from "styled-components";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import About from "./components/About";

function App() {

    const Container = styled.div`
      height: 100vh;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
      color: #fff;
      background: url("../public/images/bg.jpeg");

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
