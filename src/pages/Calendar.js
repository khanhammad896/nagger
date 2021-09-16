import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar";
import DateDivider from "../components/DateDivider";
import DatePicker from "../components/DatePicker";
import HomeCard from "../components/HomeCard";
const Calendar = () => {
  return (
    <section className="tab">
      <CalendarWrapper>
        <Appbar />
        <DatePicker />
        <DateDivider
          date={`Mon Jun 14, 2021`}
          deadline={`2 Deadlines . 14 Alerts`}
        />
        <HomeCard />
        <HomeCard />
        <DateDivider
          date={`Tue Jun 15, 2021`}
          deadline={`0 Deadline . 0 Alert`}
        />
        <DateDivider
          date={`Wed Jun 16, 2021`}
          deadline={`0 Deadline . 10 Alerts`}
        />
        <HomeCard />
        <HomeCard />
        <DateDivider
          date={`Thurs Jun 17, 2021`}
          deadline={`1 Deadline . 0 Alerts`}
        />
        <HomeCard />
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
`;
