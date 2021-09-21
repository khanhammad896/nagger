import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import TextInput from "../components/TextInput";
const Login = (props) => {
  const history = useHistory();
  return (
    <>
      <LoginWrapper height={props.height}>
        <div className="login-primary-container">
          <div>
            <div className="login-intro-greetings-container">
              <span className="font-regular">
                First thing's first -- let's get you signed in.
              </span>
            </div>
            <div className="login-input-container">
              <TextInput
                placeholder="Username"
                border="light"
                inputColor="light"
                placeholderColor="light"
              />
            </div>
            <div className="login-input-container">
              <TextInput
                password={true}
                placeholder="Password"
                border="light"
                inputColor="light"
                placeholderColor="light"
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
                <Link to="/signup">Actually, I'm new... sign me up.</Link>
              </span>
            </div>
            <div className="login-input-container continue-button">
              <Button
                onClick={() => {
                  props.setIsLogin(true);
                  history.push("/");
                }}
              >
                Continue
              </Button>
            </div>
            <div className="login-input-container">
              <span className="terms-text">
                By continuing, you agree to our terms & conditions and privacy
                policy.
              </span>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </>
  );
};

export default Login;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  .login-primary-container {
    width: 100%;
    height: ${(props) => props.height}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow: auto;
  }
  .login-primary-container > div {
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
    width: 80%;
    margin-block: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .facebook-icon {
    color: #4a619f;
  }

  .continue-button {
    width: 100%;
  }

  .sign-up-link a,
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

  @media screen and (max-width: 380px) {
    .login-intro-greetings-container {
      font-size: 10px;
    }
    .ant-input {
      font-size: 1em;
    }
    .ant-input-suffix {
      font-size: 10px;
    }
    .apps-login-button {
      font-size: 10px;
      height: 50px;
      margin-block: 5px;
    }
    .sign-up-link {
      font-size: 0.8em;
    }

    .ant-btn {
      height: 45px;
      font-size: 10px;
    }
  }

  @media screen and (min-height: 750px) {
    .login-primary-container {
      justify-content: center;
    }
  }
`;
