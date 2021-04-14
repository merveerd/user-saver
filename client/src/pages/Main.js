import React from "react";
import { useSelector } from "react-redux";
import { Header, UserForm, CountBox, Container, Table } from "../components";

const Main = (props) => {
  let showUsers = useSelector((state) => state.usersResponse.showUsers);

  return (
    <Container style={{ justifyContent: "center" }}>
      <Header text="React With NodeJS"></Header>
      <Container style={{ width: "70%", justifyContent: "space-between" }}>
        <UserForm />
        <CountBox />
      </Container>
      {showUsers && <Table />}
    </Container>
  );
};

export default Main;
