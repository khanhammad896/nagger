import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Reminders from "../pages/Reminders";
import Contacts from "../pages/Contacts";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
const Routes = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const location = useLocation();
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <MainWrapper height={height} location={location.pathname}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reminders" component={Reminders} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/calendar" component={Calendar} />
          <Route
            path="/profile"
            component={() => <Profile height={height} />}
          />
        </Switch>
        {location.pathname !== "/profile" ? <Navbar /> : null}
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
