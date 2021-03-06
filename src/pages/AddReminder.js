import React, { useState, useEffect } from "react";
import SecondaryAppBar from "../components/SecondaryAppBar";
import styled from "styled-components";
import { Select, Input } from "antd";
import Button from "@material-ui/core/Button";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import moment from "moment";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import cogoToast from "cogo-toast";

const intervalList = [
  {
    id: 1,
    interval: "Every 1 minute",
  },
  {
    id: 2,
    interval: "Every 5 minutes",
  },
  {
    id: 3,
    interval: "Every 30 minutes",
  },
  {
    id: 4,
    interval: "Every 1 hour",
  },
  {
    id: 5,
    interval: "Every day",
  },
  {
    id: 6,
    interval: "Every week",
  },
  {
    id: 7,
    interval: "Every month",
  },
  {
    id: 8,
    interval: "Every year",
  },
];

const { TextArea } = Input;

const AddReminder = (props) => {
  const [reminderInformation, setReminderInformation] = useState({
    contact_ids: [],
    title: "",
    description: "",
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm"),
    interval: null,
  });
  const [notificationType, setNotificationType] = useState("email");
  const [contacts, setContacts] = useState([]);
  const user = useSelector((state) => state.user.userDetails);

  const handleDateChange = (date) => {
    setReminderInformation({
      ...reminderInformation,
      date: date.format("YYYY-MM-DD"),
    });
  };

  const handleTimeChange = (date) => {
    setReminderInformation({
      ...reminderInformation,
      time: date.format("hh:mm"),
    });
  };

  const handlePeriod = (value) => {
    setReminderInformation({ ...reminderInformation, interval: value });
  };
  const handleChange = (value) => {
    console.log("Values >> ", value);
    setReminderInformation({
      ...reminderInformation,
      contact_ids: value,
    });
  };

  const getContacts = (value) => {
    axios({
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(Cookies.get("userDetails")).token}`,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
      params: { notificationType: notificationType, fullname: value },
    })
      .then((response) => {
        setContacts(response.data.data.data);
      })
      .catch((error) => console.log("Contacts Error > ", error.response));
  };

  const postReminder = () => {
    const data = new FormData();
    data.append("contacts", reminderInformation.contact_ids);
    data.append("title", reminderInformation.title);
    data.append(
      "schedule_reminder",
      `${reminderInformation.date}  ${reminderInformation.time}`
    );
    data.append("reminder_repeat_id", reminderInformation.interval);
    data.append("content", reminderInformation.description);
    axios({
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      url: "https://naggerapp.herokuapp.com/user/reminder",
    })
      .then(() => {
        cogoToast.success("Reminder created successfully");
        props.hideAddReminder();
      })
      .catch((error) => console.log("Reminder error > ", error.response));
  };

  // useEffect(() => {
  //   getContacts();
  // }, [notificationType]);
  // console.log("Reminder contacts", contacts);
  console.log("Reminder Information >> ", reminderInformation);
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
                    showSearch
                    onSearch={(value) => getContacts(value)}
                    onBlur={() => getContacts()}
                    value={reminderInformation.contact_ids}
                  >
                    {contacts.map((contact) => (
                      <Select.Option
                        key={contact.id}
                        value={[contact.fullname, contact.id]}
                      >
                        {contact.fullname}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="contacts-list-container">
                <span className="contacts-list-label font-regular text-dark">
                  Title:
                </span>
                <div className="reminder-title-container">
                  <Input
                    bordered={false}
                    className="reminder-title-input"
                    onChange={(e) =>
                      setReminderInformation({
                        ...reminderInformation,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="reminder-description-container">
                <TextArea
                  bordered={false}
                  autoSize
                  placeholder="Enter any notes about your reminder here..."
                  className="reminder-description-input"
                  onChange={(e) =>
                    setReminderInformation({
                      ...reminderInformation,
                      description: e.target.value,
                    })
                  }
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
                    value={reminderInformation.date}
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
                    format="hh:mm"
                    id="time-picker"
                    inputValue={reminderInformation.time}
                    onChange={handleTimeChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                    keyboardIcon={<FiClock className="clock-icon" />}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div
                className="nag-interval-data-containers underline"
                style={{ marginTop: 30 }}
              >
                <Select
                  className="period-select"
                  value={reminderInformation.interval}
                  onChange={handlePeriod}
                  bordered={false}
                >
                  {intervalList.map((interval) => (
                    <Select.Option
                      className="interval-options"
                      key={interval.id}
                      value={interval.id}
                    >
                      {interval.interval}
                    </Select.Option>
                  ))}
                </Select>
                <span className="period-icon text-dark">
                  <IoNotificationsOutline />
                </span>
              </div>
              <div className="nag-interval-data-containers">
                <div className="noti-type-wrapper">
                  <div
                    onClick={() => setNotificationType("phone")}
                    className={
                      notificationType === "phone"
                        ? "noti-buttons-active"
                        : "noti-buttons"
                    }
                  >
                    By Text
                  </div>
                  <div
                    onClick={() => setNotificationType("email")}
                    className={
                      notificationType === "email"
                        ? "noti-buttons-active"
                        : "noti-buttons"
                    }
                  >
                    By Email
                  </div>
                </div>
              </div>
              <div className="nag-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={postReminder}
                >
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

export default connect()(AddReminder);

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
    color: var(--text-dark);
    font-family: var(--font-light);
    font-size: 1.3em;
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

  .period-select .ant-select-selector,
  .period-select .ant-select-selection-item {
    background-color: transparent;
    font-family: var(--font-light);
    color: var(--text-dark);
    font-size: 1.3em;
    padding: 0;
  }

  .period-select {
    border-bottom: none;
  }
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
  .noti-type-wrapper {
    width: 100%;
    display: flex;
    flex-basis: 100%;
    height: 50px;
  }
  .noti-buttons,
  .noti-buttons-active {
    margin-inline: 10px;
    flex-basis: 100%;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    font-size: 1.3em;
    font-family: var(--font-light);
    color: var(--text-dark);
    box-shadow: 0px 0px 5px 0px #bfbfbf;
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .noti-buttons-active,
  .noti-buttons:hover {
    background-color: var(--background-theme);
    color: var(--tab-theme);
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
