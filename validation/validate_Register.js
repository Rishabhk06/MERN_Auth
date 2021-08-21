import Validator from "validator";
import { isEmpty } from "lodash-es";

//we need to ensure the form input received from form submission(frontend) are valid

const validateRegisterInput = (data) => {
  let errors = {};
  //if a  form field is empty; convert it into empty string bcz validator works only on strings
  data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.password2 = isEmpty(data.password2) ? "" : data.password2;

  //check for correct formats of fields
  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }

  return {
    errors,
    //bool to check if any error exists in the form
    isValid: isEmpty(errors),
  };
};

export default validateRegisterInput;
