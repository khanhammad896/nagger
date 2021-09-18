import React from "react";
import styled from "styled-components";
import FilterBar from "../components/FilterBar";
import SearchInput from "../components/SearchInput";
import Appbar from "../components/Appbar";
import LetterDivider from "../components/LetterDivider";
import HomeCard from "../components/HomeCard";
import LettersGroup from "../components/LettersGroup";
const Contacts = (props) => {
  let createArrayAtoZ = (_) => {
    return Array.apply(null, { length: 26 }).map((x, i) =>
      String.fromCharCode(65 + i)
    );
  };
  return (
    <section className="tab">
      <ContactsWrapper>
        <Appbar handleShowProfile={props.handleShowProfile} />
        <SearchInput placeholder="Search for a contact" />
        <FilterBar title="All Contacts" />
        <div className="contacts-feed">
          <div className="divider-container">
            <div>
              {createArrayAtoZ().map((letter) => (
                <>
                  <LetterDivider letter={letter} id={letter} />
                  <HomeCard />
                  <HomeCard />
                </>
              ))}
            </div>
          </div>
          <LettersGroup />
        </div>
      </ContactsWrapper>
    </section>
  );
};

export default Contacts;

const ContactsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .contacts-feed {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
  }

  .divider-container > div::-webkit-scrollbar,
  .contacts-feed::-webkit-scrollbar {
    display: none;
  }
  .divider-container {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }
  .divider-container > div {
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
