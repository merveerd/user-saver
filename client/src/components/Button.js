import React, { memo } from "react";
import styled from "styled-components";
import { font, bg, fontSize } from "../style/sharedStyle";
const StyledButton = styled.button`
  height: auto;
  align-self: center;
  border-radius: 10%;
  border: 5px solid #ffffff;
  box-sizing: border-box;
  ${bg.red};
  ${font.white};
  ${fontSize.sm};
  margin: 3%;
  padding: 3%;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Button = memo((props) => {
  return (
    <StyledButton style={props.style} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
});

export { Button };
