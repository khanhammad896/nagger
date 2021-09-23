import React, { useState } from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextInput from "../components/TextInput";
import AvatarWrapper from "../components/AvatarWrapper";
import axios from "axios";
import { connect, useSelector } from "react-redux";
const AddContact = (props) => {
  const [contactInformation, setContactInformation] = useState({
    name: "",
    email: "",
    phone: "",
    contact_pic: null,
  });
  const user = useSelector((state) => state.user.userDetails);
  const handleAddContact = async () => {
    axios({
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: user.token,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
      data: JSON.stringify({
        name: contactInformation.name,
        email: contactInformation.email,
        phone: contactInformation.phone,
      }),
    });
  };
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
              <AvatarWrapper />
              <div className="primary-information-container">
                <span className="primary-heading font-regular text-dark">
                  Primary Info
                </span>
                <div className="addContact-input-container">
                  <TextInput
                    placeholder="Name"
                    placeholderColor="dark"
                    border="dark"
                    inputColor="dark"
                    setField={(value) =>
                      setContactInformation({
                        ...contactInformation,
                        name: value,
                      })
                    }
                  />
                </div>
                <div className="addContact-input-container">
                  <TextInput
                    placeholder="Email"
                    placeholderColor="dark"
                    border="dark"
                    inputColor="dark"
                    setField={(value) =>
                      setContactInformation({
                        ...contactInformation,
                        email: value,
                      })
                    }
                  />
                </div>
                <div className="addContact-input-container">
                  <TextInput
                    placeholder="Phone"
                    placeholderColor="dark"
                    border="dark"
                    inputColor="dark"
                    setField={(value) =>
                      setContactInformation({
                        ...contactInformation,
                        phone: value,
                      })
                    }
                  />
                </div>
              </div>
              {/* <div className="contact-information-container">
                <span className="contact-heading font-regular text-dark">
                  Contact Info
                </span>
                <div className="addContact-input-container">
                  <TextInput
                    placeholder="Email"
                    placeholderColor="dark"
                    border="dark"
                    inputColor="dark"
                  />
                </div>
                <div className="addContact-input-container">
                  <TextInput
                    placeholder="Phone"
                    placeholderColor="dark"
                    border="dark"
                    inputColor="dark"
                  />
                </div>
              </div> */}
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

export default connect()(AddContact);

const AddContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  animation: slide-up 0.2s 1 ease-out forwards;
  .add-contact-feed {
    width: 100%;
    height: 100%;
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

  .primary-information-container,
  .contact-information-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
  }

  .addContact-input-container {
    width: 100%;
    margin-block: 20px;
  }

  .contact-information-container {
    margin-block-start: 20px;
  }
  .primary-heading,
  .contact-heading {
    font-size: 2em;
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
