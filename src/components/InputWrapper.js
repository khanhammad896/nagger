import React from "react";
import { Button, Input } from "antd";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import { useHistory, Link } from "react-router-dom";
import { InputWrapperStyle } from "../styles/InputWrapperStyle";
const InputWrapper = (props) => {
  const history = useHistory();
  return (
    <>
      <InputContainer>
        <div className="login-primary-container">
          <div className="login-intro-greetings-container">
            <span className="font-regular">{props.greet_text}</span>
          </div>
          {props.tab_no !== 3 ? (
            <>
              <div className="login-input-container">
                {props.tab_no !== 1 ? (
                  <Input
                    bordered={false}
                    placeholder={props.placeholder0}
                    className="login-username-inputs"
                  />
                ) : (
                  <Input.Password
                    bordered={false}
                    placeholder={props.placeholder0}
                    className="login-username-inputs"
                  />
                )}
              </div>
              <div className="login-input-container">
                {props.tab_no !== 1 ? (
                  <Input
                    bordered={false}
                    placeholder={props.placeholder1}
                    className="login-password-inputs"
                  />
                ) : (
                  <Input.Password
                    bordered={false}
                    placeholder={props.placeholder1}
                    className="login-password-inputs"
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <div className="switch-cards">
                <div className="switch-text font-light text-light">
                  Sync Calendar
                </div>
                <div className="switch-container">
                  <Switch
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </div>
              <div className="switch-cards">
                <div className="switch-text font-light text-light">
                  Sync Google Calendar
                </div>
                <div className="switch-container">
                  <Switch
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </div>
            </>
          )}
          {props.tab_no === 2 ? (
            <div className="switch-cards">
              <div className="switch-text font-light text-light">
                Allow Push Notifications
              </div>
              <div className="switch-container">
                <Switch
                  name="checkedA"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </div>
            </div>
          ) : null}
          <div className="login-input-container">
            <span className="sign-up-link">
              <Link to="/login">
                Wait this seems familiar. I already have an account.
              </Link>
            </span>
          </div>
          <div className="login-input-container continue-button">
            <Button
              onClick={() => {
                if (props.tab_no !== 3) {
                  props.slide();
                } else {
                  history.push("/login");
                }
              }}
            >
              {props.tab_no !== 3 ? "Continue" : "Get stuff done"}
            </Button>
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
  ${InputWrapperStyle}
`;
