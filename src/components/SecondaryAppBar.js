import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const SecondaryAppBar = (props) => {
  return (
    <>
      <SecondaryAppBarWrapper>
        <Link to="/">
          <div className="back-container text-light">
            <IoIosArrowBack className="back-icon" />
            <span className="back-text font-regular">{props.backText}</span>
          </div>
        </Link>
      </SecondaryAppBarWrapper>
    </>
  );
};

export default SecondaryAppBar;

const SecondaryAppBarWrapper = styled.div`
  width: 95%;
  margin-block: 40px 20px;
  margin-inline: auto;
  display: flex;
  justify-conent: flex-start;

  .back-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
  }

  .back-icon {
    font-size: 2em;
  }
  .back-text {
    margin-inline: 10px;
    font-size: 2em;
  }
`;
