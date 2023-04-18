import styled from "styled-components";

function App() {

    const Container = styled.div`
      height: 100vh;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      overflow-y: auto;
      scrollbar-width: none;
      color: #000;

      &::-webkit-scrollbar {
        display: none;
      }
    `

    return (
        <Container>
            hello
        </Container>
    )
}

export default App
