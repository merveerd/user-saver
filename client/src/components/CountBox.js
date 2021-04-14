import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "./StyledContainer";
import { fontSize, font } from "../style/sharedStyle";
import { getUsers } from "../actions";
import { Button } from "./Button";
import { device } from "../constants";

const StyledCountBox = styled(Container)`
  width: 30%;
  display: grid;
  box-sizing: border-box;
  grid-template-areas:
    "title title"
    "count count "
    "deneme deneme";
  background-color: #fec1fd;
  margin-bottom: 9%;
  padding: 2%;
  ${fontSize.md};
  @media only screen and ${device.xs} {
    width: 70%;
  }
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
  font-size: 4rem;
`;
const ErrorText = styled.p`
  margin-left: 20%;
  color: #d42e3f;
  ${fontSize.sm};
`;

const CountBox = memo((props) => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.usersResponse.users.length);
  let errorMessages = useSelector((state) => state.usersResponse.errorMessages);
  const [loadError, setLoadError] = useState("");
  useEffect(() => {
    if (errorMessages.get) {
      setLoadError(errorMessages.get);
    }
  }, [errorMessages]);

  return (
    <>
      <StyledCountBox>
        <Title>Users Created</Title>
        <Counter>{count}</Counter>
        <Button
          text="Get all Users"
          style={{
            backgroundColor: "orange",
            width: "100%",
            color: "black",
            marginLeft: "17%",
          }}
          onClick={() => {
            dispatch(getUsers());
          }}
        />
      </StyledCountBox>
      {loadError && <ErrorText>{loadError}</ErrorText>}
    </>
  );
});

CountBox.propTypes = {
  count: PropTypes.number,
  errorMessages: PropTypes.object,
  loadError: PropTypes.string,
};

export { CountBox };
