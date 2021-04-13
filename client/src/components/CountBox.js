import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Container } from "./StyledContainer";
import { fontSize, font } from "../style/sharedStyle";
import { getUsers } from "../actions";
import { Button } from "./Button";

const StyledCountBox = styled(Container)`
  height: 15rem;
  width: 25%;
  margin-left: 10%;
  display: grid;
  box-sizing: border-box;
  grid-template-areas:
    "title title"
    "count count "
    "deneme deneme";
  background-color: #fec1fd;
  ${fontSize.md};
`;

const Title = styled.p`
  grid-area: title;
  margin-left: 6%;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Counter = styled.p`
  margin-left: 3%;
  grid-area: count;
  align-self: center;
  justify-self: center;
  ${font.red};
  font-size: 4.4rem;
`;

const CountBox = memo((props) => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.usersResponse.users.length);

  return (
    <StyledCountBox style={props.style}>
      <Title>Users Created</Title>
      <Counter>{count}</Counter>
      <Button
        text="Get all Users"
        style={{
          backgroundColor: "orange",
          width: "70%",
          color: "black",
          marginLeft: "17%",
        }}
        onClick={() => {
          dispatch(getUsers());
        }}
      />
    </StyledCountBox>
  );
});

export { CountBox };
