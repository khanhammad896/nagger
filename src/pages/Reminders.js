import React from "react";
import Appbar from "../components/Appbar";
import styled from "styled-components";
import SearchInput from "../components/SearchInput";
import HomeCard from "../components/HomeCard";
import FilterBar from "../components/FilterBar";
import TextField from "@material-ui/core/TextField";
import { FiSearch } from "react-icons/fi";

const Reminders = (props) => {
  const [text, setText] = React.useState("");

  return (
    <section className="tab">
      <ReminderWrapper>
        <Appbar handleShowProfile={props.handleShowProfile} />
        <SearchInput placeholder="Search for a reminder..." />
        <FilterBar title="All Reminders" />
        <div className="reminder-feed"></div>
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
  .reminder-feed {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    overflow: auto;
  }
  .reminder-feed::-webkit-scrollbar {
    display: none;
  }
`;
