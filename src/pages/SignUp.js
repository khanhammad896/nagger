import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import Slide from "@material-ui/core/Slide";
const SignUp = (props) => {
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [errors, setErrors] = useState({
    fullNameError: null,
    userNameError: null,
    passwordError: null,
    confirmPasswordError: null,
    phoneError: null,
    emailError: null,
  });
  const slide1 = () => {
    setReverse(false);
    setChecked(false);
    setChecked1(true);
  };
  const slide2 = () => {
    setReverse(false);
    setChecked1(false);
    setChecked2(true);
  };
  const back1 = () => {
    setReverse(true);
    setChecked1(false);
    setChecked(true);
  };
  const back2 = () => {
    setReverse(true);
    setChecked2(false);
    setChecked1(true);
  };
  const back3 = () => {
    setReverse(true);
    setChecked3(false);
    setChecked2(true);
  };
  const slide3 = () => {
    setReverse(false);
    setChecked2(false);
    setChecked3(true);
  };

  const [signupInformation, setSignUpInformation] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
    profilePicture: "",
  });

  const validateNames = () => {
    if (signupInformation.fullname.length === 0) {
      return setErrors({ ...errors, fullNameError: "Name is required" });
    }
    if (signupInformation.fullname.length < 3) {
      return setErrors({
        ...errors,
        fullNameError: "Name must be 3 letters or more",
      });
    }
    if (signupInformation.fullname.length > 20) {
      return setErrors({
        ...errors,
        fullNameError: "Name must be 20 letters or more",
      });
    }
    return setErrors({ ...errors, fullNameError: null });
  };

  const setFullname = (value) => {
    setSignUpInformation({ ...signupInformation, fullname: value });
  };

  const setUserName = (value) => {
    setSignUpInformation({ ...signupInformation, username: value });
  };
  const setPassword = (value) => {
    setSignUpInformation({ ...signupInformation, password: value });
  };
  const setConfirmPassword = (value) => {
    setSignUpInformation({
      ...signupInformation,
      confirmPassword: value,
    });
  };
  const setPhone = (value) => {
    setSignUpInformation({ ...signupInformation, phone: value });
  };
  const setEmail = (value) => {
    setSignUpInformation({ ...signupInformation, email: value });
  };
  const setProfilePicture = (value) => {
    setSignUpInformation({
      ...signupInformation,
      profilePicture: value,
    });
  };

  console.log("Errors >>> ", errors);

  useEffect(() => {
    validateNames();
  }, [signupInformation]);
  return (
    <SignUpWrapper>
      {checked ? (
        <Slide
          direction={!reverse ? "left" : "right"}
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          <div
            style={{
              height: "100%",
            }}
          >
            <InputWrapper
              greet_text="Hey, nice to meet you! Let's get to know each other."
              placeholder0="Here's what they call me*"
              placeholder1="Pick a username*"
              slide={slide1}
              tab_no={0}
              height={props.height}
              setFullname={setFullname}
              setUserName={setUserName}
              fullname={signupInformation.fullname}
              username={signupInformation.username}
              validateNames={validateNames}
            />
          </div>
        </Slide>
      ) : null}
      {checked1 ? (
        <Slide
          direction={!reverse ? "left" : "right"}
          in={checked1}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <InputWrapper
              greet_text="Next, Pick a password. It's important so we're gonna have you type it twice"
              placeholder0="Password*"
              placeholder1="Re-type password*"
              slide={slide2}
              tab_no={1}
              height={props.height}
              back={back1}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              password={signupInformation.password}
              confirmPassword={signupInformation.confirmPassword}
            />
          </div>
        </Slide>
      ) : null}
      {checked2 ? (
        <Slide
          direction={!reverse ? "left" : "right"}
          in={checked2}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <InputWrapper
              greet_text="This one's important too -- where should we nag you?"
              placeholder0="Phone"
              placeholder1="Email"
              tab_no={2}
              height={props.height}
              back={back2}
              slide={slide3}
              setPhone={setPhone}
              setEmail={setEmail}
              phone={signupInformation.phone}
              email={signupInformation.email}
            />
          </div>
        </Slide>
      ) : null}
      {checked3 ? (
        <Slide
          direction={!reverse ? "left" : "right"}
          in={checked3}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <InputWrapper
              tab_no={3}
              height={props.height}
              back={back3}
              greet_text="May be you want to share your profile picture here"
            />
          </div>
        </Slide>
      ) : null}
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
