import React from "react";
import data from "./data.json";
import { Box } from "./Styled";
import { Button } from "./Styled";
import { ButDiv } from "./Styled";

let check = 0;

export default function Frase1() {
  return (
    <div>
      <ButDiv>
        <Button onClick={Back()}>
          <strong>Anterior</strong>
        </Button>
        <Button onClick={Next()}>
          <strong>Següent</strong>
        </Button>
      </ButDiv>
      {data &&
        data.map((item) => {
          return (
            <Box className="box" key={item.id}>
              {item.frase}
            </Box>
          );
        })}
    </div>
  );
}

function Next(){
  check+=1;
  let selected = data.filter(item => item.id === check);
  selected.frase = "jaja";
  console.log(check);
}

function Back(){
  check-=1;
  console.log("sad");
}

