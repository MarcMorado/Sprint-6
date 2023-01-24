import React from "react";
import Frase1 from "./components/Scene";
import Img2 from "./img/1.jpg";
import { ImgDiv } from "./components/Styled";

function App() {
  return (
    <>
      <ImgDiv
        style={{backgroundImage: `url(${Img2})`, 
        }}
      >
        <Frase1 />
      </ImgDiv>
    </>
  );
}

export default App;
