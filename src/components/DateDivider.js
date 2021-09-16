import React from "react";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
const DateDivider = (props) => {
  return (
    <>
      <DividerWrapper className="text-dark">
        <Divider />
        <span className="date ">{props.dateRange}</span>
        <span className="day font-regular">{props.day}</span>
      </DividerWrapper>
    </>
  );
};

export default DateDivider;

const DividerWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .MuiDivider-root {
    margin-block: 20px;
    background-color: var(--background-theme);
    width: 95%;
    margin-inline: auto;
    opacity: 40%;
  }
  .date {
    font-size: 0.8em;
  }

  .day {
    font-size: 2em;
    font-weight: 600;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
