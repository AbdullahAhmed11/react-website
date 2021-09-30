import React from "react";
import styled, {css} from "styled-components";
import Contact from "./Component/Contact";
import Feature from "./Component/Feature";
import Intro from "./Component/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Price from "./Component/Price";
import Service from "./Component/Service";

const Container = styled.div `
height: 100vh;
overflow:hidden;
position: relative;z-index:-1;
`
const Shape = css`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:-1;

`
const IntroShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
background-color: crimson;
`
const FeatureShape = styled.div `
${Shape}
clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
background-color: pink;
`
const ServiceShape = styled.div `
${Shape}
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
background-color: #f88497;
`
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
    <Container>
      <Navbar/>
      <Intro/>
      <IntroShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service/>
      {!smallScreen && <ServiceShape/>}
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
    </Container>
    </>
  );
}

export default App;
