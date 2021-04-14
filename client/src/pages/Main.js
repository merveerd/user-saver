import React from "react";
import { useSelector } from "react-redux";
import { Header, UserForm, CountBox, Container, Table } from "../components";
import styled from "styled-components";
import { device } from "../constants";
import PropTypes from "prop-types";

const UpperSection = styled(Container)`
  width: 70%;
  justify-content: space-between;
  @media only screen and ${device.sm} {
    width: 95%;
    justify-content: space-around;
  }
`;

const Main = (props) => {
  let showUsers = useSelector((state) => state.usersResponse.showUsers);

  return (
    <Container style={{ justifyContent: "center" }}>
      <Header text="React With NodeJS"></Header>
      <UpperSection>
        <UserForm />
        <CountBox />
      </UpperSection>
      {showUsers && <Table />}
    </Container>
  );
};

Main.propTypes = {
  showUsers: PropTypes.bool,
};
export default Main;
