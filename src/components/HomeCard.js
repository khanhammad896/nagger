import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/img2.jpg";
import { Badge } from "@material-ui/core";
import { HiOutlineUser, HiOutlineCalendar } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";
const HomeCard = () => {
  const location = useLocation();
  return (
    <div>
      <HomeCardWrapper>
        <div>
          <Avatar alt="Profile" src={profile} />
        </div>
        <div className="card-content">
          <div className="card-text">
            <span className="user-name font-regular text-dark">
              Jonathan D. Dye
            </span>
            <div className="recipients-date-container">
              <div className="recipients-container">
                <HiOutlineUser />
                <span className="recipients-name-date font-light text-dark">
                  You, Maria, Jogen
                </span>
              </div>
              <div className="date-container">
                <HiOutlineCalendar />
                <span className="recipients-name-date font-light text-dark">
                  Mon Jun 14, 2021
                </span>
              </div>
            </div>
            <span className="message-text font-regular text-dark">
              Hello, are you there?
            </span>
          </div>
          {location.pathname !== "/reminders" ? (
            <div className="online-status">
              <div>
                <Badge className="online-icon" />
                <div className="online-time font-regular text-dark">
                  Yesterday
                </div>
              </div>
            </div>
          ) : (
            <div className="expansion-container">
              <IoIosArrowForward />
            </div>
          )}
        </div>
      </HomeCardWrapper>
    </div>
  );
};

export default HomeCard;

const HomeCardWrapper = styled.div`
  margin-block: 20px;
  width: 100%;

  background-color: #fff;
  border-radius: 15px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .MuiAvatar-root {
    width: 40px;
    height: 40px;
  }

  .card-content {
    flex-grow: 1;
    padding-inline-start: 15px;
    display: flex;
    justify-content: flex-start;
  }
  .card-text {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .user-name {
    font-size: 1.1em;
    font-weight: 600;
  }
  .message-text {
    font-size: 0.8em;
    opacity: 40%;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .online-status {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 10px;
  }

  .online-status > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .online-icon {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50%;
    background-color: #4bc09b;
    margin-inline: 10px;
  }

  .online-time {
    font-size: 0.7em;
    display: inline;
    white-space: nowrap;
  }

  .recipients-date-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-block: 10px;
  }
  .recipients-container,
  .date-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .recipients-name-date {
    font-size: 0.7em;
    margin-left: 5px;
  }

  .date-container {
    flex-grow: 1;
    margin-left: 20px;
  }

  .recipients-date-container svg {
    color: var(--background-theme);
  }

  .expansion-container {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .expansion-container svg {
    color: var(--background-theme);
    font-size: 1.5em;
  }
  @media screen and (max-width: 490px) {
    padding: 10px 10px;

    .card-content {
      padding-inline-start: 10px;
    }

    .recipients-date-container {
      margin-block: 5px;
    }

    .card-text {
      font-size: 13px;
    }

    .online-status > div {
      font-size: 14px;
    }

    .online-icon {
      width: 5px !important;
      height: 5px !important;
      margin-inline: 5px;
    }
  }

  @media screen and (max-width: 320px) {
    padding: 10px 8px;

    .card-content {
      padding-inline-start: 8px;
    }

    .recipients-date-container {
      margin-block: 3px;
    }

    .card-text {
      font-size: 12px;
    }

    .online-status > div {
      font-size: 12px;
    }

    .online-icon {
      width: 5px !important;
      height: 5px !important;
      margin-inline: 5px;
    }
  }
`;
