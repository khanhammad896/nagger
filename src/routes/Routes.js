import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Reminders from "../pages/Reminders";
import Contacts from "../pages/Contacts";
import Calendar from "../pages/Calendar";

const Routes = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <MainWrapper height={height}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reminders" component={Reminders} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
        <Navbar />
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
