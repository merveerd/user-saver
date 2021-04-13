import React, { memo } from "react";
import styled from "styled-components";
import { Container } from "./StyledContainer";
import { font, bg, fontSize } from "../style/sharedStyle";
const StyledHeader = styled(Container)`
  height: 4rem;
  justify-content: center;
  ${bg.beige};
  ${font.white};
  ${fontSize.lrg};
  padding: 3%;
`;

const Header = memo((props) => {
  return <StyledHeader style={props.style}>{props.text}</StyledHeader>;
});

export { Header };
