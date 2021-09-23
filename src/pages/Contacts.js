import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterBar from "../components/FilterBar";
import SearchInput from "../components/SearchInput";
import Appbar from "../components/Appbar";
import LetterDivider from "../components/LetterDivider";
import HomeCard from "../components/HomeCard";
import LettersGroup from "../components/LettersGroup";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setContacts } from "../redux/reducers/Contacts/contacts.actions";
const Contacts = (props) => {
  const user = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const contactsDetails = [
    {
      name: "Hammad",
      phone: "+923482232866",
      email: "khanhammad896@gmail.com",
    },
    {
      name: "Howard",
      phone: "+923492232366",
      email: "howard02@gmail.com",
    },
    {
      name: "Ares",
      phone: "+923422232866",
      email: "ares09@gmail.com",
    },
    {
      name: "Azeem",
      phone: "+923482902866",
      email: "azeem65@gmail.com",
    },
    {
      name: "Michael",
      phone: "+923492532986",
      email: "michael90@gmail.com",
    },
    {
      name: "Trina",
      phone: "+923286235876",
      email: "trina87@gmail.com",
    },
  ];
  const handleSearchText = (value) => {
    setSearchText(value);
  };
  let createArrayAtoZ = (_) => {
    return Array.apply(null, { length: 26 }).map((x, i) =>
      String.fromCharCode(65 + i)
    );
  };
  const getContacts = async () => {
    axios({
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: user.token,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
    })
      .then((response) => {
        dispatch(setContacts(response.data));
        console.log("Contacts Response >", response.data);
      })
      .catch((error) => console.log("Contacts Error > ", error));
  };
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <section className="tab">
      <ContactsWrapper>
        <Appbar handleShowProfile={props.handleShowProfile} />
        <SearchInput
          placeholder="Search for a contact"
          handleSearchText={handleSearchText}
        />
        <FilterBar title="All Contacts" />
        <div className="contacts-feed">
          <div className="divider-container">
            <div>
              {createArrayAtoZ().map((letter) => (
                <>
                  <LetterDivider letter={letter} id={letter} />
                  {contactsDetails
                    .filter(
                      (contact) =>
                        contact.name[0].toLowerCase() === letter.toLowerCase()
                    )
                    .map((contact) => (
                      <HomeCard />
                    ))}
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

export default connect()(Contacts);

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
