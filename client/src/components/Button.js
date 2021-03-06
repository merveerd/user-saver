import React, { memo } from "react";
import styled from "styled-components";
import { font, bg } from "../style/sharedStyle";
import { device } from "../constants";
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
  @media only screen and ${device.sm} {
    width: 60%;
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
