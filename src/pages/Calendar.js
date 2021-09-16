import React from "react";
import styled from "styled-components";
import Appbar from "../components/Appbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
const Calendar = () => {
  return (
    <section className="tab">
      <CalendarWrapper>
        <Appbar />
        <div className="month-select-container">
          <Select defaultValue={`June 2021`}>
            <MenuItem>June 2021</MenuItem>
            <MenuItem>July 2021</MenuItem>
            <MenuItem>August 2021</MenuItem>
          </Select>
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

  .month-select-container {
    margin-block-start: 20px;
  }

  .MuiInputBase-root {
    width: 40%;
    background: transparent;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border: none;
  }
`;
