import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "./Button";
import { createUser } from "../actions";
const letterValidator = /^[a-z\s]+$/i; //include language specific characters

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  width: 35%;
  margin-left: 14%;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-areas:
    "firstname lastname"
    "email email"
    "submit submit";
`;

const StyledLabel = styled.label`
  display: flex;
  margin-bottom: 3%;
`;

const StyledInput = styled.input`
  height: 1.5rem;
  border: 2px solid #e6e6e6;
  border-radius: 4%;
  outline-color: #94d4f2;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  margin-left: 0;
  width: 80%;
`;
const ErrorText = styled.p`
  color: #d42e3f;
`;

const UserForm = (props) => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const isValid = (err) => {
    let isValidBool = true;
    if (!firstName || !letterValidator.test(firstName)) {
      isValidBool = false;
      setFirstNameError("Required");
    }
    if (!lastName || !letterValidator.test(lastName)) {
      isValidBool = false;
      setLastNameError("Required");
    }
    if (!email) {
      isValidBool = false;
      setEmailError("Required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      isValidBool = false;
      setEmailError("Invalid email address");
    }
    return isValidBool;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid() && dispatch(createUser({ firstName, lastName, email }));
  };

  return (
    <FormContainer>
      <h3 style={{ fontSize: "2rem" }}>Create User</h3>

      <StyledForm>
        <InputContainer>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput
            type="text"
            value={firstName}
            onChange={(e) => {
              firstNameError && setFirstNameError("");
              setFirstName(e.target.value);
            }}
          />
          <ErrorText>{firstNameError}</ErrorText>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Last Name</StyledLabel>
          <StyledInput
            type="text"
            value={lastName}
            onChange={(e) => {
              lastNameError && setLastNameError("");
              setLastName(e.target.value);
            }}
          />
          <ErrorText>{lastNameError}</ErrorText>
        </InputContainer>
        <InputContainer>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            type="text"
            value={email}
            onChange={(e) => {
              emailError && setEmailError("");
              setEmail(e.target.value);
            }}
          />
          <ErrorText>{emailError}</ErrorText>
        </InputContainer>
        <Button
          style={{ gridArea: "submit" }}
          text="Create"
          onClick={handleSubmit}
        ></Button>
      </StyledForm>
    </FormContainer>
  );
};

export { UserForm };
