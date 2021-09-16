import React from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/img2.jpg";

const Profile = (props) => {
  return (
    <>
      <ProfileWrapper height={props.height}>
        <SecondaryAppBar backText={`Profile`} />
        <section className="tab-stack">
          <div className="display-container">
            <div>
              <Avatar alt="profile" src={profile} />
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
  justif-content: flex-start;
  flex-direction: column;
  animation: slide-up 0.2s 1 ease-out forwards;

  .display-container {
    width: 100%;
    margin-top: 50px;
  }
  .display-container > div {
    width: max-content;
    margin-inline: auto;
  }
  .MuiAvatar-root {
    width: 120px;
    height: 120px;
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
