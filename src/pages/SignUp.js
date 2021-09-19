import React from "react";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import Slide from "@material-ui/core/Slide";
const SignUp = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
    <SignUpWrapper>
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        <div>
          <InputWrapper />
        </div>
      </Slide>
      <Slide direction="left" in={checked1} mountOnEnter unmountOnExit>
        <div>
          <InputWrapper />
        </div>
      </Slide>
      <Slide direction="left" in={checked2} mountOnEnter unmountOnExit>
        <div>
          <InputWrapper />
        </div>
      </Slide>
      <Slide direction="left" in={checked3} mountOnEnter unmountOnExit>
        <div>
          <InputWrapper />
        </div>
      </Slide>
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
