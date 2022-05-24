import { useState } from 'react';

export const SignUpValidation = (userDetails) => {
  let error="";
  var validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var validRegexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  const { firstname, lastname, email, password } = userDetails;
  if (firstname === "none" || lastname === "none" || password === "none" || email === "none") {
    error = "Feilds cannot be empty";
    return ({ status: false, error });
  }
  if (!email.match(validRegexEmail)) {
    error = "Enter a valid email id";
    return ({ status: false, error });
  }
  if (!password.match(validRegexPassword)) {
    error = "Password should contain atleast one Uppercase and atleast one Lowercase letter and atleast one number";
    return ({ status: false, error });
  }
  if (password.length < 8 || password.length >= 32) {
    error = "Password should be of length 8 letter but less than 32 letters";
    return ({ status: false, error });
  }
  if (error === "") { 
    return ({ status: true, error: "none" }); }
  else {
    return ({ status: false, error });
  }

};
