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
          date={`Fri Sep 17, 2021`}
          deadline={`2 Deadlines . 14 Alerts`}
        />
        <HomeCard />
        <HomeCard />
        <DateDivider
          date={`Sat Sep 18, 2021`}
          deadline={`0 Deadline . 0 Alert`}
        />
        <DateDivider
          date={`Sun Sep 19, 2021`}
          deadline={`0 Deadline . 10 Alerts`}
        />
        <HomeCard />
        <HomeCard />
        <DateDivider
          date={`Mon Sep 20, 2021`}
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
