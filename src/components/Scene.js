import React, { useState } from "react";
import Frases from "./data.js";
import { Box } from "./Styled";
import { Button } from "./Styled";
import { ButDiv } from "./Styled";
import { RedBox } from "./Styled";

let imgT;
export default function Frase1() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgT})`,
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100vh',
          backgroundSize:`cover`
        }}
      >
        <ButDiv>
          <Button
            onClick={() =>
              count > 1 ? setCount(count - 1) : setCount(count - 0)
            }
          >
            <strong>Anterior</strong>
          </Button>
          <Button
            onClick={() =>
              count < 4 ? setCount(count + 1) : setCount(count + 0)
            }
          >
            <strong>Següent</strong>
          </Button>
        </ButDiv>
        {Frases &&
          Frases.map((item) => {
            return item.id === count ? (
              <RedBox key={item.frase} {...(imgT = item.image)}>
                {item.frase}{" "}
              </RedBox>
            ) : (
              <Box key={item.frase}> {item.frase} </Box>
            );
          })}
      </div>
    </div>
  );
}
