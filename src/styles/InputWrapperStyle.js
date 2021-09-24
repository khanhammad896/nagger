export const InputWrapperStyle = `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  // padding: 0 2%;
  .login-primary-container {
    width: 100%;
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
    font-size: 1.9em;
  }

  .login-input-container, .go-back {
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

  .go-back{
    margin:0;

  }
  .go-back > span{
    font-family: var(--font-light);
    color: var(--tab-theme);
    font-size: 1.2em;
    cursor: pointer;
    transition: color 0.1s linear;
  }
  .go-back:hover span{
    color: #8884dc;
  }
  .continue-button{
    width: 100%;
  }
  .error-container{
    width: 90%;
    margin-inline: auto;
    margin-block-start: 20px;
  }

  .ant-alert{
    height: 50px;
    border-radius: 7px;
    font-family: var(--font-light);
    color: var(--text-dark);
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
  }
  @media screen and (max-width: 320px) {
    .login-intro-greetings-container {
      font-size: 10px;
    }
    .ant-input {
      font-size: 1em;
    }
    .ant-input-suffix {
      font-size: 10px;
    }

    .sign-up-link {
      font-size: 0.8em;
    }

    .ant-btn {
      height: 50px;
      font-size: 10px;
    }
  }
  
  @media screen and (min-height: 660px) {
      justify-content: center;
  }
  `;
