import React from "react";
import styled from "styled-components";
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { BiBellPlus, BiUserPlus } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <NavbarWrapper className="font-regular">
        <div className="menu-item text-light">
          <IoHomeOutline />
          <span className="menu-label">Home</span>
        </div>
        <div className="menu-item text-light">
          <IoNotificationsOutline />
          <span className="menu-label">Home</span>
        </div>
        <div className="menu-item circle-icon text-light">
          <BiBellPlus />
        </div>
        <div className="menu-item text-light">
          <RiUser3Line />
          <span className="menu-label">Home</span>
        </div>
        <div className="menu-item text-light">
          <IoCalendarOutline />
          <span className="menu-label">Home</span>
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
