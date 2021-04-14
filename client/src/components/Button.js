import React, { memo } from "react";
import styled from "styled-components";
import { font, bg, fontSize } from "../style/sharedStyle";
const StyledButton = styled.button`
  width: 20%;
  align-self: center;
  border-radius: 5%;
  border: none;
  box-sizing: border-box;
  ${bg.red};
  ${font.white};

  padding: 0.5rem;
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
