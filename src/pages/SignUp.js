import React from "react";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import Slide from "@material-ui/core/Slide";
const SignUp = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const slide1 = () => {
    setChecked(false);
    setChecked1(true);
  };
  const slide2 = () => {
    setChecked1(false);
    setChecked2(true);
  };
  const slide3 = () => {
    setChecked2(false);
    setChecked3(true);
  };

  return (
    <SignUpWrapper>
      {checked ? (
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          <div>
            <InputWrapper
              greet_text="Hey, nice to meet you! Let's get to know each other."
              placeholder0="Here's what they call me*"
              placeholder1="Pick a username*"
              slide={slide1}
              tab_no={0}
            />
          </div>
        </Slide>
      ) : null}
      {checked1 ? (
        <Slide direction="left" in={checked1} mountOnEnter unmountOnExit>
          <div>
            <InputWrapper
              greet_text="Next, Pick a password. It's important so we're gonna have you type it twice"
              placeholder0="Password*"
              placeholder1="Re-type password*"
              slide={slide2}
              tab_no={1}
            />
          </div>
        </Slide>
      ) : null}
      {checked2 ? (
        <Slide direction="left" in={checked2} mountOnEnter unmountOnExit>
          <div>
            <InputWrapper
              greet_text="This one's important too -- where should we nag you?"
              placeholder0="Phone"
              placeholder1="Email"
              slide={slide3}
              tab_no={2}
            />
          </div>
        </Slide>
      ) : null}
      {checked3 ? (
        <Slide direction="left" in={checked3} mountOnEnter unmountOnExit>
          <div>
            <InputWrapper
              greet_text="Okay cool, last one. Should we sync your calendars?"
              placeholder0="Phone"
              placeholder1="Email"
              slide={slide3}
              tab_no={3}
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
