import React, { useState } from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextInput from "../components/TextInput";
import AvatarWrapper from "../components/AvatarWrapper";
import axios from "axios";
import { connect, useSelector, useDispatch } from "react-redux";
import { setContacts } from "../redux/reducers/Contacts/contacts.actions";
import cogoToast from "cogo-toast";
const AddContact = (props) => {
  const dispatch = useDispatch();
  const [contactInformation, setContactInformation] = useState({
    name: "",
    email: "",
    phone: "",
    profile_url: null,
  });
  const user = useSelector((state) => state.user.userDetails);

  const handleImage = (value) => {
    const files = value;
    if (
      files.type === "image/png" ||
      files.type === "image/jpeg" ||
      files.type === "image/jpg"
    ) {
      files &&
        setContactInformation({ ...contactInformation, profile_url: value });
    } else {
      cogoToast.error("Invalid file format");
    }
  };

  const handleAddContact = async () => {
    const data = new FormData();
    data.append("contacts[0].fullname", contactInformation.name);
    data.append("contacts[0].email", contactInformation.email);
    data.append("contacts[0].phone", contactInformation.phone);
    data.append("profile_pic", contactInformation.profile_url);
    data.append("manual", true);
    axios({
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
      data: data,
    })
      .then(() => {
        cogoToast.success("Contact created successfully");
        props.hideAddContact();
      })
      .catch((error) => cogoToast.error("Something wrong happened, Try again"));
  };
  console.log("Contact Information > ", contactInformation);
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
              <AvatarWrapper handleImage={handleImage} />
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddContact}
                >
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
