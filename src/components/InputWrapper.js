import React from "react";
import { TextField } from "@material-ui/core";
import { Button, Input } from "antd";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const InputWrapper = (props) => {
  return (
    <>
      <InputContainer>
        <div className="login-primary-container">
          <div className="login-intro-greetings-container">
            <span className="font-regular">{props.greet_text}</span>
          </div>
          <div className="login-input-container">
            <Input
              bordered={false}
              placeholder={props.namePlaceholder}
              className="login-username-inputs"
            />
          </div>
          <div className="login-input-container">
            <Input.Password
              bordered={false}
              placeholder={props.Passwordplaceholder}
              className="login-password-inputs"
            />
          </div>
          <div className="login-input-container">
            <div className="apps-login-button">
              <span className="apps-icon">
                <FcGoogle />
              </span>
              <span className="apps-login-text font-light text-dark">
                Sign in with google
              </span>
            </div>
          </div>
          <div className="login-input-container facebook">
            <div className="apps-login-button">
              <span className="apps-icon facebook-icon">
                <FaFacebook />
              </span>
              <span className="apps-login-text font-light text-dark">
                Login with facebook
              </span>
            </div>
          </div>
          <div className="login-input-container">
            <span className="sign-up-link">
              Actually, I'm new... sign me up.
            </span>
          </div>
          <div className="login-input-container continue-button">
            <Button>Continue</Button>
          </div>
          <div className="login-input-container">
            <span className="terms-text">
              By continuing, you agree to our terms & conditions and privacy
              policy.
            </span>
          </div>
        </div>
      </InputContainer>
    </>
  );
};

export default InputWrapper;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  .login-primary-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .login-intro-greetings-container {
    width: 95%;
    background-color: var(--tab-theme);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 15px 15px 15px 0px;
    margin-block: 20px;
  }
  .login-intro-greetings-container span {
    font-size: 2em;
  }

  .login-input-container {
    width: inherit;
    margin-block: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-username-inputs,
  .login-password-inputs {
    width: 80%;
    border-bottom: 2px solid var(--tab-theme);
    padding: 5px 10px;
  }

  .ant-input {
    font-size: 1.3em;
    font-family: var(--font-light);
    color: var(--tab-theme);
  }

  .ant-input::placeholder {
    font-size: 1em;
    font-family: var(--font-light);
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: var(--tab-theme);
  }

  .ant-input-suffix svg {
    color: var(--tab-theme);
    font-size: 1.5em;
  }

  .apps-login-button {
    width: 80%;
    height: 60px;
    background-color: var(--tab-theme);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .apps-icon {
    font-size: 2em;
    margin-inline: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .apps-login-text {
    font-size: 1.5em;
    margin-inline: 10px;
  }
  .facebook,
  .continue-button {
    margin-block: 0;
  }
  .facebook-icon {
    color: #4a619f;
  }

  .sign-up-link,
  .terms-text {
    color: var(--tab-theme);
    font-size: 1.2em;
    cursor: pointer;
    font-family: var(--font-light);
  }
  .terms-text {
    font-size: 1em;
  }
  .sign-up-link:hover {
    border-bottom: 2px solid var(--tab-theme);
  }
  .ant-btn {
    width: 90%;
    height: 60px;
    border-radius: 10px;
    background-color: var(--tab-theme);
  }
  .ant-btn span {
    font-family: var(--font-regular);
    font-size: 2em;
    color: var(--background-theme);
  }

  @media screen and (max-width: 400px) {
    .login-intro-greetings-container {
      font-size: 12px;
    }
    .ant-input {
      font-size: 1.1em;
    }
    .ant-input-suffix {
      font-size: 12px;
    }
    .apps-login-button {
      font-size: 12px;
      height: 50px;
      margin-block: 5px;
    }
    .sign-up-link {
      font-size: 1em;
    }

    .ant-btn {
      height: 55px;
      font-size: 12px;
    }
  }
`;
