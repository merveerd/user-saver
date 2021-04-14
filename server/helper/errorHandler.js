const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  // unique email error
  else if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  // validation errors
  else if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  } else {
    errors = { message: err.message };
  }

  return errors;
};
module.exports = handleErrors;
