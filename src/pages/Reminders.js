import React from "react";
import Appbar from "../components/Appbar";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import HomeCard from "../components/HomeCard";
import FilterBar from "../components/FilterBar";
const Reminders = () => {
  return (
    <section className="tab">
      <ReminderWrapper>
        <Appbar />
        <SearchInput />
        <FilterBar />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </ReminderWrapper>
    </section>
  );
};

export default Reminders;

const ReminderWrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
