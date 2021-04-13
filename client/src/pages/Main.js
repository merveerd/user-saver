import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, UserForm, CountBox, Container } from "../components";

const Main = (props) => {
  return (
    <>
      <Header text="React With NodeJS"></Header>
      <Container>
        <UserForm />
        <CountBox />
      </Container>
    </>
  );
};

export default Main;
