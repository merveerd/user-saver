import React, { memo } from "react";
import styled from "styled-components";
import { font, bg, fontSize } from "../style/sharedStyle";
const StyledTitle = styled.p`
  ${fontSize.md};
  margin-top: 2rem;
  font-weight: 500;
`;

const Title = memo((props) => {
  return <StyledTitle>{props.text}</StyledTitle>;
});

export { Title };
