import React from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import { Avatar } from "antd";
import profile from "../assets/img2.jpg";
import { IoCameraOutline } from "react-icons/io5";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import { GoTrashcan } from "react-icons/go";

const Profile = (props) => {
  const isImage = true;
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [state1, setState1] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [state2, setState2] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange1 = (event) => {
    setState1({ ...state1, [event.target.name]: event.target.checked });
  };
  const handleChange2 = (event) => {
    setState2({ ...state2, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <ProfileWrapper height={props.height} showProfile={props.showProfile}>
        <SecondaryAppBar backText={`Profile`} hideProfile={props.hideProfile} />
        <section className="tab-stack">
          <div className="profile-feed">
            <div className="display-container">
              {!isImage ? (
                <div className="after">
                  <label
                    htmlFor="image-input"
                    className="image-input-label font-regular text-light"
                  >
                    <IoCameraOutline />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="image-input"
                    style={{ width: 0.0001, height: 0.0001 }}
                  />
                </div>
              ) : (
                <Avatar alt="user-image" src={profile} />
              )}
            </div>
            <div className="profile-greetings">
              <span className="font-regular text-dark">Welcome back,</span>
              <span className="profile-name font-regular text-dark">
                Dora Designer!
              </span>
            </div>
            <div className="contact-info-heading-container">
              <span className="contact-info-heading font-regular text-dark">
                My Contact Info
              </span>
              <TextField
                id="outlined-search"
                label="Phone"
                type="text"
                variant="outlined"
                className="primary-inputs"
              />
              <TextField
                id="outlined-search"
                label="Email"
                type="text"
                variant="outlined"
                className="primary-inputs"
              />
            </div>
            <div className="setting-info-container">
              <span className="setting-info-heading font-regular text-dark">
                Settings
              </span>
              <div className="switch-cards">
                <div className="switch-text font-light text-dark">
                  Allow push notifications
                </div>
                <div className="switch-container">
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </div>
              <div className="switch-cards">
                <div className="switch-text font-light text-dark">
                  Connect Google Calendar
                </div>
                <div className="switch-container">
                  <Switch
                    checked={state1.checkedA}
                    onChange={handleChange1}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </div>
              <div className="switch-cards">
                <div className="switch-text font-light text-dark">
                  Connect Calendar
                </div>
                <div className="switch-container">
                  <Switch
                    checked={state2.checkedA}
                    onChange={handleChange2}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
              </div>
            </div>
            <div className="delete-container">
              <span className="delete-text">Delete Account</span>
              <span>
                <GoTrashcan />
              </span>
            </div>
          </div>
        </section>
      </ProfileWrapper>
    </>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  animation: slide-up 0.2s 1 ease-out forwards;
  .profile-feed {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .display-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-block: 20px;
    position: relative;
    background-color: var(--background-theme);
  }
  .after {
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .image-input-label {
    display: flex;
    justif-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }
  .image-input-label svg {
    font-size: 6em;
  }

  .ant-avatar {
    width: inherit;
    height: inherit;
    border: 3px solid #fff;
    box-shadow: 0px 0px 10px 0px #a8a6a6;
  }

  .profile-greetings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .profile-greetings span {
    font-size: 2em;
  }
  .profile-name {
    opacity: 0.9;
  }
  .contact-info-heading-container,
  .setting-info-container {
    margin-block: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .setting-info-container {
    margin: 0;
  }
  .contact-info-heading,
  .setting-info-heading {
    font-size: 1.8em;
  }
  .primary-inputs {
    margin-block-start: 20px;
  }
  .switch-cards {
    width: 100%;
    display: flex;
    margin-block: 20px;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid var(--text-dark);
  }
  .switch-text {
    flex-grow: 1;
    font-size: 1.4em;
  }
  .switch-container {
    margin-inline-start: 20px;
  }
  .MuiSwitch-colorSecondary.Mui-checked {
    color: var(--background-theme);
  }
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: var(--background-theme);
  }
  .delete-container {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-block: 20px;
  }
  .delete-container:hover {
    border-bottom: 2px solid #f95e5e;
  }
  .delete-container span {
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f95e5e;
    margin-inline: 2.5px;
    font-family: var(--font-regular);
  }
  @keyframes slide-up {
    0% {
      transform: translateY(${(props) => props.height}px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
