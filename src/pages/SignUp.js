import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import Slide from "@material-ui/core/Slide";
import axios from "axios";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";

const SignUp = (props) => {
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [error, setError] = useState(null);
  // const [errors, setErrors] = useState({
  //   fullNameError: null,
  //   userNameError: null,
  //   passwordError: null,
  //   confirmPasswordError: null,
  //   phoneError: null,
  //   emailError: null,
  // });
  const [imageURL, setImageURL] = useState(null);
  const [signupInformation, setSignUpInformation] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
    profilePicture: null,
  });
  // GENERATING URL FOR IMAGE PREVIEW
  const preview = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImageURL(reader.result);
    reader.onerror = (error) => console.log("Image error", error);
  };

  const handleImage = (value) => {
    const files = value;
    if (
      files.type === "image/png" ||
      files.type === "image/jpeg" ||
      files.type === "image/jpg"
    ) {
      setSignUpInformation({
        ...signupInformation,
        profilePicture: files,
      });
      preview(files);
      return imageURL;
    } else {
      cogoToast.error("Invalid file format");
    }
  };

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

  const signup = async () => {
    const data = new FormData();
    data.append("username", signupInformation.username);
    data.append("password", signupInformation.password);
    data.append("phone", signupInformation.phone);
    data.append("email", signupInformation.email);
    data.append("nick_name", signupInformation.fullname);
    data.append("profilePicture", signupInformation.profilePicture);
    if (signupInformation.password === signupInformation.confirmPassword) {
      await axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: "https://naggerapp.herokuapp.com/user/signup",
        data: data,
      })
        .then((data) => {
          if (data.data.ResponseCode === "Success") {
            cogoToast.success("Signed up successfully");
            history.push("/login");
            console.log("Response > ", data);
          }
        })
        .catch((error) => setError(error.response.data.errorMessage));
    } else {
      setError("Passwords do not match");
    }
  };

  console.log("Sign up information", signupInformation);
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
              setFullname={(value) =>
                setSignUpInformation({ ...signupInformation, fullname: value })
              }
              setUserName={(value) => {
                setSignUpInformation({ ...signupInformation, username: value });
              }}
              fullname={signupInformation.fullname}
              username={signupInformation.username}
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
              setPassword={(value) => {
                setSignUpInformation({ ...signupInformation, password: value });
              }}
              setConfirmPassword={(value) => {
                setSignUpInformation({
                  ...signupInformation,
                  confirmPassword: value,
                });
              }}
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
              setPhone={(value) => {
                setSignUpInformation({ ...signupInformation, phone: value });
              }}
              setEmail={(value) => {
                setSignUpInformation({ ...signupInformation, email: value });
              }}
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
              signup={signup}
              handleImage={handleImage}
              error={error}
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
