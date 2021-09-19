export const InputWrapperStyle = `
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
    font-size: 1.9em;
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

  .sign-up-link a,
  .terms-text {
    color: var(--tab-theme);
    font-size: 1em;
    cursor: pointer;
    font-family: var(--font-light);
  }
  .terms-text {
    width: 80%;
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

  .switch-cards {
    width: 90%;
    display: flex;
    margin-block: 20px;
    justify-content: flex-start;
    align-items: center;
  }
  .switch-text {
    flex-grow: 1;
    font-size: 1.4em;
  }
  .switch-container {
    margin-inline-start: 20px;
  }
  .MuiSwitch-colorSecondary.Mui-checked {
    color: var(--tab-theme);
  }
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: var(--tab-theme);
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

    .sign-up-link {
      font-size: 1em;
    }

    .ant-btn {
      height: 55px;
      font-size: 12px;
    }
  }`;
