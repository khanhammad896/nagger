import React from "react";
import styled from "styled-components";
import DateDivider from "../components/DateDivider";
import Appbar from "../components/Appbar";
import HomeCard from "../components/HomeCard";
const Home = () => {
  return (
    <>
      <section className="tab">
        <HomeWrapper>
          <Appbar />
          <section className="tasks-info-container font-regular text-dark">
            <span>2 Deadlines . 14 Alerts Today</span>
          </section>
          <div className="feed-wrapper">
            <DateDivider dateRange={"Mon Jun 14, 2021"} day={"Today"} />
            <HomeCard />
            <HomeCard />

            <HomeCard />

            <DateDivider dateRange={"Tue Jun 15, 2021"} day={"Tomorrow"} />
            <HomeCard />

            <HomeCard />

            <HomeCard />

            <DateDivider
              dateRange={"Mon Jun 14 - Jun 21, 2021"}
              day={"Later this week"}
            />
            <HomeCard />

            <HomeCard />

            <HomeCard />
          </div>
        </HomeWrapper>
      </section>
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .tasks-info-container {
    width: 100%;
  }
  .tasks-info-container > span {
    font-size: 0.9em;
  }

  .feed-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-grow: 1;
  }

  @media screen and (max-width: 400px) {
    .tasks-info-container {
      font-size: 14px;
    }
  }
`;
