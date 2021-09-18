import React from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/img2.jpg";
import TextField from "@material-ui/core/TextField";
const AddContact = (props) => {
  const isImage = false;
  return (
    <>
      <AddContactWrapper height={props.height}>
        <SecondaryAppBar
          backText={`New Contact`}
          hideProfile={props.hideAddContact}
        />
        <section className="tab-stack">
          <div className="add-contact-feed">
            <div className="add-contact-container">
              <div className="contact-image-container">
                {!isImage ? (
                  <div className="after">
                    <label
                      htmlFor="image-input"
                      className="image-input-label font-regular text-light"
                    >
                      <FiUpload />
                      <span>Add photo</span>
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
              <div className="primary-information-container">
                <span className="primary-heading font-regular text-dark">
                  Primary Info
                </span>
                <TextField
                  id="outlined-search"
                  label="First name"
                  type="text"
                  variant="outlined"
                  className="primary-inputs"
                />
                <TextField
                  id="outlined-search"
                  label="Last name"
                  type="text"
                  variant="outlined"
                  className="primary-inputs"
                />
                <TextField
                  id="outlined-search"
                  label="Company"
                  type="text"
                  variant="outlined"
                  className="primary-inputs"
                />
              </div>
              <div className="contact-information-container">
                <span className="contact-heading font-regular text-dark">
                  Contact Info
                </span>
                <TextField
                  id="outlined-search"
                  label="Email"
                  type="email"
                  variant="outlined"
                  className="primary-inputs"
                />
                <TextField
                  id="outlined-search"
                  label="Phone"
                  type="text"
                  variant="outlined"
                  className="primary-inputs"
                />
              </div>
              <div className="nag-button-container">
                <Button variant="contained" color="primary">
                  Add Contact
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AddContactWrapper>
    </>
  );
};

export default AddContact;

const AddContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  animation: slide-up 0.2s 1 ease-out forwards;
  .add-contact-feed {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .add-contact-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  .contact-image-container {
    margin-block: 20px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: var(--background-theme);
    position: relative;
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
    font-size: 1.5em;
  }
  .image-input-label span {
    font-size: 1.2em;
  }

  .MuiAvatar-root {
    width: inherit;
    height: inherit;
  }

  .primary-information-container,
  .contact-information-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .contact-information-container {
    margin-block-start: 20px;
  }
  .primary-heading,
  .contact-heading {
    font-size: 2em;
  }

  .primary-inputs {
    margin-block-start: 20px;
  }
  .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--text-dark);
  }

  .MuiInputBase-input {
    font-family: var(--font-light);
    color: var(--text-dark);
  }

  .nag-button-container {
    width: 100%;
    margin-block: 20px;
  }

  .MuiButton-root {
    width: 100%;
    height: 60px;
    text-transform: none;
    background-color: var(--background-theme);
    border-radius: 10px;
  }
  .MuiButton-label {
    font-size: 1.5em;
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
