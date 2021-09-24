import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { TiArrowUnsorted } from "react-icons/ti";
import { Badge } from "@material-ui/core";
import "../styles/DatePicker.css";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DateSelector = (props) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("dddd, MMMM DD YYYY")
  );
  const [weekdays, setWeekDays] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateWeek = () => {
    const week = [];

    for (var i = 0; i < 8; i++) {
      const day = moment(selectedDate)
        .add(i, "days")
        .format("dddd MMM DD")
        .split(" ");
      const dateObj = {
        index: i,
        day: day[0],
        month: day[1],
        date: day[2],
      };
      week.push(dateObj);
    }
    return week;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.format("dddd, MMM DD YYYY"));
    setWeekDays(updateWeek());
  };

  React.useEffect(() => {
    setWeekDays(updateWeek());
  }, []);

  console.log("Week days", weekdays);
  return (
    <>
      <DateSelectorWrapper addReminder={props.addReminder}>
        <div className="month-select-container">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              format="dddd, MMM DD YYYY"
              variant="inline"
              margin="normal"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              onClose={() => setWeekDays(updateWeek())}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="month-date-container">
          <div className="date-card-wrapper">
            {weekdays.map((weekday) => (
              <div
                className={
                  activeIndex === weekday.index
                    ? "date-card-selected"
                    : "date-card"
                }
                onClick={() => setActiveIndex(weekday.index)}
              >
                <Badge
                  className={
                    activeIndex === weekday.index
                      ? "date-dot-selected"
                      : "date-dot"
                  }
                />
                <span className="date-card-day">{weekday.day}</span>
                <span className="date-card-date">{weekday.date}</span>
                <span className="date-card-month">{weekday.month}</span>
              </div>
            ))}
          </div>
        </div>
      </DateSelectorWrapper>
    </>
  );
};

export default DateSelector;

const DateSelectorWrapper = styled.div`
  .month-select-container {
    margin-block-start: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiInputBase-root {
    background: transparent;
    font-family: var(--font-light);
    color: var(--text-dark);
    align-items: center;
    justify-content: flex-start;
    display: flex;
  }

  .MuiSelect-select {
    font-size: 1.5em;
    padding: 0;
  }

  .MuiSelect-select.MuiSelect-select {
    padding-right: 25px;
  }
  .MuiSelect-icon {
    font-size: 1.2em;
    color: var(--text-dark);
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border: none;
  }

  .MuiSelect-select:focus {
    background-color: transparent;
  }

  .month-date-container {
    overflow: auto !important;
    white-space: nowrap;
    margin-top: 20px;
    display: flex;
  }

  .month-date-container::-webkit-scrollbar {
    display: none;
  }

  .date-card-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline: auto;
  }

  .date-card,
  .date-card-selected {
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 20px;
    margin-inline: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--font-light);
    color: var(--text-dark);
    cursor: pointer;
    transition: transform 0.3s linear;
  }

  .date-card:hover {
    transform: scale(1.05);
  }
  .date-card-selected {
    width: 88px;
    height: 88px;
    background: var(--background-theme);
    color: #fff;
  }
  .date-dot,
  .date-dot-selected {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--background-theme);
  }
  .date-dot-selected {
    background: #fa5b5b;
  }

  .date-card-day {
    font-size: 0.7em;
  }

  .date-card-date {
    font-size: 1.5em;
  }

  .date-card-month {
    font-size: 0.7em;
  }

  .MuiFormControl-root {
    border: 1px solid var(--text-dark);
    border-radius: 10px;
    padding-inline-start: 10px;
  }
  .MuiFormControl-marginNormal {
    margin: 0;
  }
  .MuiInputBase-input {
    font-family: var(--font-regular);
    font-size: 1.4em;
  }
  .MuiIconButton-label {
    color: var(--text-dark);
  }

  @media screen and (max-width: 400px) {
    .MuiInputBase-root {
      font-size: 14px;
    }
    .date-card,
    .date-card-selected {
      width: 60px;
      height: 60px;
    }
    .date-card-selected {
      width: 66px;
      height: 66px;
    }
    .date-card,
    .date-card-selected {
      font-size: 12px;
    }
  }
`;
