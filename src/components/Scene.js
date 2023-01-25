import React, { useState } from "react";
import Frases from "./data.js";
import { Box } from "./Styled";
import { Button } from "./Styled";
import { ButDiv } from "./Styled";

export default function Frase1() {
  
  
  return (
    <div>
      <ButDiv>
        <Button >
          <strong>Anterior</strong>
        </Button>
        <Button >
          <strong>Següent</strong>
        </Button>
      </ButDiv>
      {Frases &&
        Frases.map((item) => {
          return (
            <Box key={item.frase}>
              {item.frase}
            </Box>
          );
        })}
    </div>
  );
}


