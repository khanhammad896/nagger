import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import profile from "../assets/img2.jpg";
import { Menu, Dropdown } from "antd";
import "../styles/Appbar.css";
import { logout } from "../redux/reducers/Login/login.actions";
import { removeUser } from "../redux/reducers/User/user.actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
const Appbar = (props) => {
  const dispatch = useDispatch();
  const today = new Date();
  const [greet, setGreet] = useState(() => {
    if (today.getHours() > 6 && today.getHours() <= 12) {
      return "Good Morning";
    }
    if (today.getHours() > 12 && today.getHours() <= 4) {
      return "Good Afternoon";
    }
    return "Good Evening";
  });

  const history = useHistory();
  const user = useSelector((state) => state.user.userDetails);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeUser());
    Cookies.remove("userDetails");
    localStorage.removeItem("token");
    history.push("/login");
  };
  const menu = (
    <Menu>
      <Menu.Item onClick={() => props.handleShowProfile()}>Profile</Menu.Item>
      <Menu.Item onClick={() => handleLogout()}>Logout</Menu.Item>
    </Menu>
  );
  console.log("Greet >>", greet);
  return (
    <>
      <AppBarContainer className="app-bar">
        <div className="heading-container">
          <span className="text-dark font-bold">{greet}</span>
          <span className="username text-dark font-bold">
            {user.nick_name}!
          </span>
        </div>
        <div className="avatar-container">
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <Avatar
              alt="Profile"
              src={user.profile_url}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </div>
      </AppBarContainer>
    </>
  );
};

export default connect()(Appbar);

const AppBarContainer = styled.section`
  width: 100%;
  margin-block: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .heading-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
  }

  .heading-container > span {
    font-size: 1.6em;
  }

  .username {
    font-size: 1.4em !important;
    opacity: 80%;
  }
  .MuiAvatar-root {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 400px) {
    .heading-container {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 720px) {
    .heading-container {
      font-size: 18px;
    }
  }
`;
