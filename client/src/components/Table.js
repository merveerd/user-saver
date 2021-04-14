import React, { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { device } from "../constants";

const StyledTable = styled.table`
  width: 70%;
  border-collapse: collapse;
  border-right: 2px solid #e6e6e6;
  border-top: 2px solid #e6e6e6;
  table-layout: fixed;

  @media only screen and ${device.sm} {
    width: 95%;
  }
`;

const StyledTh = styled.th`
  padding: 0.5rem;
  border-left: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
`;
const StyledTd = styled.td`
  padding: 0.5rem;
  border-left: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;

  overflow: scroll;
`;

const Table = memo((props) => {
  let users = useSelector((state) => state.usersResponse.users);

  const AllUsers = () => {
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <StyledTd> {index + 1}</StyledTd>
          <StyledTd> {user.firstName}</StyledTd>
          <StyledTd> {user.lastName}</StyledTd>
          <StyledTd> {user.email}</StyledTd>
        </tr>
      );
    });
  };
  return (
    <>
      {users.length && (
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>
                <strong>User Id</strong>
              </StyledTh>

              <StyledTh>
                <strong>First Name</strong>
              </StyledTh>

              <StyledTh>
                <strong>Last Name</strong>
              </StyledTh>

              <StyledTh>
                <strong style={{ maxWidth: "20px" }}>Email</strong>
              </StyledTh>
            </tr>
          </thead>
          <tbody>
            <AllUsers></AllUsers>
          </tbody>
        </StyledTable>
      )}
    </>
  );
});

export { Table };
