import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar";
import DateDivider from "../components/DateDivider";
import DateSelector from "../components/DateSelector";
import HomeCard from "../components/HomeCard";
const Calendar = (props) => {
  return (
    <section className="tab">
      <CalendarWrapper>
        <Appbar handleShowProfile={props.handleShowProfile} />
        <DateSelector />
        <div className="calendar-feed">
          {/* <DateDivider
            date={`Fri Sep 17, 2021`}
            deadline={`2 Deadlines . 14 Alerts`}
          /> */}
        </div>
      </CalendarWrapper>
    </section>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .calendar-feed {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    overflow: auto;
  }
  .calendar-feed::-webkit-scrollbar {
    display: none;
  }
`;
