import React from "react";
import styled from "styled-components";
import moment from "moment";
import { TiArrowUnsorted } from "react-icons/ti";
import { Badge } from "@material-ui/core";
import "../styles/DatePicker.css";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

const TimeSelector = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format("dddd, MMMM DD YYYY")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log("Selected Date", selectedDate);
  return (
    <>
      <TimeSelectorWrapper addReminder={props.addReminder}>
        <div className="time-select-container">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </TimeSelectorWrapper>
    </>
  );
};

export default TimeSelector;

const TimeSelectorWrapper = styled.div`
  .time-select-container {
    margin-block-start: ${(props) => (props.addReminder ? 0 : 20)}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border: none;
  }

  .MuiSelect-select:focus {
    background-color: transparent;
  }

  .MuiFormControl-root {
    border: ${(props) =>
      props.addReminder ? `none` : `1px solid var(--text-dark)`};
    border-bottom: ${(props) =>
      props.addReminder ? `1px solid var(--text-dark)` : `none`};
    border-radius: ${(props) => (props.addReminder ? 0 : 10)}px;
    padding-inline-start: 10px;
  }
  .MuiFormControl-marginNormal {
    margin: 0;
  }
  .MuiInputBase-input {
    font-family: var(--font-regular);
    font-size: 1.4em;
    pointer-events: none;
  }
  .MuiIconButton-label {
    color: var(--text-dark);
  }

  @media screen and (max-width: 400px) {
    .MuiInputBase-root {
      font-size: 14px;
    }
  }
`;
