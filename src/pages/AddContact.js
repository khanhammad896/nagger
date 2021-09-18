import React from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";

const AddContact = (props) => {
  return (
    <>
      <AddContactWrapper height={props.height}>
        <SecondaryAppBar
          backText={`New Contact`}
          hideProfile={props.hideAddContact}
        />
        <section className="tab-stack">
          <div className="add-contact-container"></div>
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

  .add-contact-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
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
