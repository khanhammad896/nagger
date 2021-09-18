import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Reminders from "../pages/Reminders";
import Contacts from "../pages/Contacts";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import AddReminder from "../pages/AddReminder";
import AddContact from "../pages/AddContact";
const Routes = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddReminder, setShowAddReminder] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);

  const location = useLocation();

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
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  console.log("Show Profile", showProfile);
  console.log("Show Add Reminder", showAddReminder);

  const routes = () => {
    if (!showProfile && !showAddReminder && !showAddContact) {
      return (
        <>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home handleShowProfile={handleShowProfile} />}
            />
            <Route
              path="/reminders"
              component={() => (
                <Reminders handleShowProfile={handleShowProfile} />
              )}
            />
            <Route
              path="/contacts"
              component={() => (
                <Contacts handleShowProfile={handleShowProfile} />
              )}
            />
            <Route
              path="/calendar"
              component={() => (
                <Calendar handleShowProfile={handleShowProfile} />
              )}
            />
          </Switch>
          <Navbar
            handleShowAddReminder={handleShowAddReminder}
            handleShowAddContact={handleShowAddContact}
          />
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

export default Routes;

const MainWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: var(--background-theme);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
