import React, { useState } from "react";
import styled from "styled-components";
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { BiBellPlus, BiUserPlus } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const Navbar = (props) => {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(() => {
    if (location.pathname === "/") {
      return 0;
    }
    if (location.pathname === "/reminders") {
      return 1;
    }

    if (location.pathname === "/contacts") {
      return 2;
    }

    if (location.pathname === "/calendar") {
      return 3;
    }
  });
  return (
    <>
      <NavbarWrapper className="font-light">
        <div>
          <Link
            className={
              tabIndex === 0 ? `menu-item text-light` : `menu-item text-dim`
            }
            to="/"
            onClick={() => setTabIndex(0)}
          >
            <IoHomeOutline />
            <span className="menu-label">Home</span>
          </Link>
        </div>
        <div>
          <Link
            className={
              tabIndex === 1 ? `menu-item text-light` : `menu-item text-dim`
            }
            to="/reminders"
            onClick={() => setTabIndex(1)}
          >
            <IoNotificationsOutline />
            <span className="menu-label">Reminder</span>
          </Link>
        </div>
        {tabIndex === 2 ? (
          <div
            className="menu-item circle-icon text-light"
            onClick={() => props.handleShowAddContact()}
          >
            <BiUserPlus />
          </div>
        ) : (
          <div
            className="menu-item circle-icon text-light"
            onClick={() => props.handleShowAddReminder()}
          >
            <BiBellPlus />
          </div>
        )}
        <div>
          <Link
            className={
              tabIndex === 2 ? `menu-item text-light` : `menu-item text-dim`
            }
            to="/contacts"
            onClick={() => setTabIndex(2)}
          >
            <RiUser3Line />
            <span className="menu-label">Contacts</span>
          </Link>
        </div>
        <div>
          <Link
            className={
              tabIndex === 3 ? `menu-item text-light` : `menu-item text-dim`
            }
            to="/calendar"
            onClick={() => setTabIndex(3)}
          >
            <IoCalendarOutline />
            <span className="menu-label">Calendar</span>
          </Link>
        </div>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;

const NavbarWrapper = styled.section`
  width: 90%;
  margin-block: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-inline: auto;

  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu-item > svg {
    font-size: 2em;
  }

  .circle-icon {
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    border-radius: 100%;
    background-color: #e9684b;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .circle-icon > svg {
    font-size: 1.8em;
  }

  .menu-label {
    font-size: 0.8em;
  }

  @media screen and (min-width: 719px) {
    .menu-item {
      font-size: 18px;
    }
    .circle-icon {
      width: 65px;
      height: 65px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    .menu-item {
      font-size: 12px;
    }
    .circle-icon {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
