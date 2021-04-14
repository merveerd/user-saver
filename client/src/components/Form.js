import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "./Button";
import { Title } from "./Title";
import { createUser } from "../actions";
import { device } from "../constants";

const letterValidator = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u; //include language specific characters
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
`;

const StyledForm = styled.form`
  display: grid;
  grid-gap: 2rem;
  grid-template-areas:
    "firstname lastname"
    "email email"
    "submit submit";

  @media only screen and ${device.sm} {
    grid-gap: 0;
    display: flex;
    flex-direction: column;
  }
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
  @media only screen and ${device.xs} {
    margin: 4%;
  }
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
  let errorMessages = useSelector((state) => state.usersResponse.errorMessages);

  useEffect(() => {
    if (errorMessages.create) {
      setEmailError(errorMessages.create);
    }
  }, [errorMessages]);

  const isValid = () => {
    let isValidBool = true;
    if (!firstName) {
      isValidBool = false;
      setFirstNameError("Required");
    } else if (!letterValidator.test(firstName)) {
      isValidBool = false;
      setFirstNameError("Invalid First Name");
    }
    if (!lastName) {
      isValidBool = false;
      setLastNameError("Required");
    } else if (!letterValidator.test(lastName)) {
      isValidBool = false;
      setLastNameError("Invalid Last Name");
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
      <Title text="Create User" />

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
        <InputContainer style={{ gridColumn: "span 2" }}>
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

UserForm.propTypes = {
  users: PropTypes.array,
  firstNameError: PropTypes.string,
  lastNameError: PropTypes.string,
  emailError: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

export { UserForm };
