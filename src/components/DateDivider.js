import React from "react";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const DateDivider = (props) => {
  const location = useLocation();
  return (
    <>
      <DividerWrapper className="text-dark" location={location.pathname}>
        <Divider />
        {location.pathname !== "/calendar" ? (
          <>
            <span className="date font-light">{props.dateRange}</span>
            <span className="day font-regular">{props.day}</span>
          </>
        ) : (
          <>
            <span className="calendar-dates font-regular">{props.date}</span>
            <span className="calendar-deadline-info font-light">
              {props.deadline}
            </span>
          </>
        )}
      </DividerWrapper>
    </>
  );
};

export default DateDivider;

const DividerWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-block: ${(props) => (props.location === "/calendar" ? 10 : 0)}px;
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

  .calendar-dates {
    font-size: 1.4em;
  }

  .calendar-deadline-info {
    font-size: 0.8em;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
