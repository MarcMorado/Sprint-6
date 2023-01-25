import React, { useState } from "react";
import Frase1 from "./components/Scene";
import { Button } from "./components/Styled";
import { DesDiv } from "./components/Styled";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      {!isToggled && (
        <DesDiv>
          <h1>Benvigut!</h1>
          <p>
            Participa en aquest tutorial, on mitjançant dos botons podràs
            avançar i retrocedir en els consells.
          </p>
          <Button onClick={() => setIsToggled(!isToggled)}>Començar</Button>
        </DesDiv>
      )}
      {isToggled && <Frase1 />}
    </>
  );
}

export default App;
