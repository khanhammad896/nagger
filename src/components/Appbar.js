import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/img2.jpg";
const Appbar = () => {
  return (
    <>
      <AppBarContainer className="app-bar">
        <div className="heading-container">
          <span className="text-dark font-bold">Good Morning</span>
          <span className="username text-dark font-bold">Dora Designer!</span>
        </div>
        <div className="avatar-container">
          <Avatar alt="Profile" src={profile} />
        </div>
      </AppBarContainer>
    </>
  );
};

export default Appbar;

const AppBarContainer = styled.section`
  width: 100%;
  margin-block: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .heading-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
  }

  .heading-container > span {
    font-size: 1.6em;
  }

  .username {
    font-size: 1.4em !important;
    opacity: 80%;
  }
  .MuiAvatar-root {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 400px) {
    .heading-container {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 720px) {
    .heading-container {
      font-size: 18px;
    }
  }
`;
