import React, { memo } from "react";
import styled from "styled-components";
import { Container } from "./StyledContainer";
import { font, bg, fontSize } from "../style/sharedStyle";
const StyledHeader = styled(Container)`
  height: 7rem;
  justify-content: center;
  ${bg.beige};
  ${font.white};
  ${fontSize.lrg};
`;

const Header = memo((props) => {
  return <StyledHeader style={props.style}>{props.text}</StyledHeader>;
});

export { Header };
