import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Reminders from "../pages/Reminders";
import Contacts from "../pages/Contacts";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import AddReminder from "../pages/AddReminder";
import AddContact from "../pages/AddContact";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { connect, useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUser } from "../redux/reducers/User/user.actions";
const Routes = () => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState(window.innerHeight);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddReminder, setShowAddReminder] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const location = useLocation();
  const isLogin = useSelector((state) => state.login.isLogin);
  const handleShowProfile = () => {
    setShowProfile(true);
  };

  const hideProfile = () => {
    setShowProfile(false);
  };

  const handleShowAddReminder = () => {
    setShowAddReminder(true);
  };

  const hideAddReminder = () => {
    setShowAddReminder(false);
  };

  const handleShowAddContact = () => {
    setShowAddContact(true);
  };

  const hideAddContact = () => {
    setShowAddContact(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      dispatch(setUser(JSON.parse(Cookies.get("userDetails"))));
    }
  }, []);

  const routes = () => {
    if (!showProfile && !showAddReminder && !showAddContact) {
      return (
        <>
          <Switch>
            <Route exact path="/">
              {isLogin ? (
                <Home handleShowProfile={handleShowProfile} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/reminders">
              {isLogin ? (
                <Reminders handleShowProfile={handleShowProfile} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/contacts">
              {isLogin ? (
                <Contacts handleShowProfile={handleShowProfile} />
              ) : (
                <Redirect to="/login" />
              )}{" "}
            </Route>
            <Route path="/calendar">
              {isLogin ? (
                <Calendar handleShowProfile={handleShowProfile} />
              ) : (
                <Redirect to="/login" />
              )}{" "}
            </Route>
            <Route path="/login">
              {!isLogin ? <Login height={height} /> : <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!isLogin ? <SignUp height={height} /> : <Redirect to="/" />}
            </Route>
          </Switch>
          {location.pathname === "/" ||
          location.pathname === "/reminders" ||
          location.pathname === "/contacts" ||
          location.pathname === "/calendar" ? (
            <Navbar
              handleShowAddReminder={handleShowAddReminder}
              handleShowAddContact={handleShowAddContact}
            />
          ) : null}
        </>
      );
    }
    if (showProfile) {
      return (
        <Profile
          height={height}
          hideProfile={hideProfile}
          showProfile={showProfile}
        />
      );
    }
    if (showAddReminder) {
      return <AddReminder height={height} hideAddReminder={hideAddReminder} />;
    }
    if (showAddContact) {
      return <AddContact height={height} hideAddContact={hideAddContact} />;
    }
  };

  return (
    <>
      <MainWrapper height={height} location={location.pathname}>
        {routes()}
      </MainWrapper>
    </>
  );
};

export default connect()(Routes);

const MainWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: var(--background-theme);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
