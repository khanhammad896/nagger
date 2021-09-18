import React from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import { Select, Input } from "antd";
import { Select as MaterialSelect } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import moment from "moment";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const { TextArea } = Input;

const AddReminder = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format("dddd, MMMM DD YYYY")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [period, setPeriod] = React.useState("");

  const handlePeriod = (event) => {
    setPeriod(event.target.value);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <AddReminderWrapper height={props.height}>
        <SecondaryAppBar
          backText={`New Reminder`}
          hideProfile={props.hideAddReminder}
        />
        <section className="tab-stack">
          <div className="add-reminder-container">
            <form>
              <div className="contacts-list-container">
                <span className="contacts-list-label font-regular text-dark">
                  To:
                </span>
                <div className="contacts-select-container">
                  <Select
                    mode="multiple"
                    allowClear
                    onChange={handleChange}
                    bordered={false}
                  >
                    {names.map((name) => (
                      <Select.Option value={name}>{name}</Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="contacts-list-container">
                <span className="contacts-list-label font-regular text-dark">
                  Title:
                </span>
                <div className="reminder-title-container">
                  <Input bordered={false} className="reminder-title-input" />
                </div>
              </div>
              <div className="reminder-description-container">
                <TextArea
                  bordered={false}
                  autoSize
                  placeholder="Enter any notes about your reminder here..."
                  className="reminder-description-input"
                />
              </div>
              <div className="repetition-info-container">
                <span className="nag-title font-regular text-dark">
                  Nag me until...
                </span>
                <span className="nag-text font-regular text-dark">
                  When is it due? When do you need to have it done?
                </span>
              </div>
              <div className="nag-interval-data-containers">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    format="dddd, MMM DD YYYY"
                    variant="inline"
                    margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="nag-interval-data-containers">
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    keyboardIcon={<FiClock className="clock-icon" />}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div className="nag-interval-data-containers underline">
                <MaterialSelect
                  className="period-select"
                  value={period}
                  onChange={handlePeriod}
                >
                  <MenuItem>By Hour</MenuItem>
                  <MenuItem>By Day</MenuItem>
                  <MenuItem>By Months</MenuItem>
                </MaterialSelect>
                <span className="period-icon text-dark">
                  <IoNotificationsOutline />
                </span>
              </div>
              <div className="nag-interval-data-containers">
                <div className="nag-methods">
                  <span className="contacts-list-label font-regular text-dark">
                    by
                  </span>
                  <div className="contacts-select-container">
                    <Select
                      mode="multiple"
                      allowClear
                      onChange={handleChange}
                      bordered={false}
                    >
                      <Select.Option value="Text">Text</Select.Option>
                      <Select.Option value="Push">Push</Select.Option>
                      <Select.Option value="Email">Email</Select.Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="nag-button-container">
                <Button variant="contained" color="primary">
                  Nag me
                </Button>
              </div>
            </form>
          </div>
        </section>
      </AddReminderWrapper>
    </>
  );
};

export default AddReminder;

const AddReminderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  animation: slide-up 0.2s 1 ease-out forwards;
  .add-reminder-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  form {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .contacts-list-container,
  .nag-methods {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-block-start: 20px;
  }
  .nag-methods {
    margin-block-start: 10px;
    flex-grow: 1;
  }

  .contacts-list-label {
    font-size: 1.3em;
  }

  .contacts-select-container {
    flex-grow: 1;
    margin-left: 20px;
  }

  .ant-select {
    width: 100%;
    border-bottom: 1px solid var(--text-dark);
  }

  .ant-select-selection-overflow-item {
  }

  .ant-select-selection-item {
    background-color: #fff;
    border: none;
  }

  .reminder-title-container {
    flex-grow: 1;
    margin-left: 20px;
  }

  .reminder-title-input {
    border-bottom: 1px solid var(--text-dark);
  }

  .reminder-description-container {
    flex-grow: 1;
    margin-block: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    padding: 20px;
  }
  .reminder-description-input {
    padding: 0;
    font-size: 1.1em;
    font-family: var(--font-light);
    color: var(--text-dark);
  }
  .reminder-description-input::placeholder {
    font-family: var(--font-light);
    opacity: 0.8;
  }
  .repetition-info-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .nag-title {
    font-size: 2em;
  }
  .nag-text {
    font-size: 1.1em;
  }
  .nag-interval-data-containers {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }

  .nag-button-container {
    width: 100%;
    margin-block: 20px;
  }

  .MuiButton-root {
    width: 100%;
    height: 60px;
    text-transform: none;
    background-color: var(--background-theme);
    border-radius: 10px;
  }
  .MuiButton-label {
    font-size: 1.5em;
    font-family: var(--font-regular);
  }

  .MuiFormControl-root {
    width: 100%;
    border-bottom: 1px solid var(--text-dark);
  }

  .MuiInputBase-input {
    font-size: 1.5em;
    color: var(--text-dark);
    font-family: var(--font-light);
  }
  .MuiSvgIcon-root {
    color: var(--text-dark);
  }
  .MuiInputBase-root {
    width: 100%;
    font-family: var(--font-light);
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after,
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border: none;
  }
  // .period-select {
  //   border-bottom: 1px solid var(--text-dark);
  // }

  .period-select svg {
    display: none;
  }

  .MuiSelect-select:focus {
    background: transparent;
  }
  .period-icon {
    padding-right: 10px;
  }
  .period-icon > svg {
    font-size: 2em;
  }

  .clock-icon {
    color: var(--text-dark);
  }

  .underline {
    border-bottom: 1px solid var(--text-dark);
  }

  @media screen and (max-width: 400px) {
    .MuiInputBase-root {
      font-size: 12px;
    }
    .period-icon {
      font-size: 12px;
    }
    .repetition-info-container {
      font-size: 12px;
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(${(props) => props.height}px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
