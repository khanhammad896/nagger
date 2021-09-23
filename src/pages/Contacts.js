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
import { Pagination } from "antd";
import Cookies from "js-cookie";
const Contacts = (props) => {
  const user = useSelector((state) => state.user.userDetails);
  const contacts = useSelector((state) => state.contacts.contacts);
  const [importedContacts, setImportedContacts] = useState([]);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState();
  const handleSearchText = (value) => {
    setSearchText(value);
  };
  let createArrayAtoZ = (_) => {
    return Array.apply(null, { length: 26 }).map((x, i) =>
      String.fromCharCode(65 + i)
    );
  };
  const getContacts = () => {
    axios({
      method: "get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(Cookies.get("userDetails")).token}`,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
      params: { page: page },
    })
      .then((response) => {
        dispatch(setContacts(response.data.data.data));
        setPageData(response.data.data.lastPage);
      })
      .catch((error) => console.log("Contacts Error > ", error.response));
  };
  const postImportedContacts = async () => {
    axios({
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      url: "https://naggerapp.herokuapp.com/user/contact",
      data: JSON.stringify({
        contacts: importedContacts,
      }),
    })
      .then((response) =>
        console.log("Posted response >", response.data.data.data)
      )
      .catch((error) => console.log("Contact post >", error.response));
    window.location.reload();
  };
  const responseCallback = (response) => {
    console.log(response);
    response.forEach((contact) => {
      const newContact = importedContacts;
      if (contact.phoneNumber === null) {
        newContact.push({
          fullname: contact.title,
          email: contact.email,
          external_id: "google",
        });
      } else {
        newContact.push({
          fullname: contact.title,
          phone: contact.phoneNumber,
          email: contact.email,
          external_id: "google",
        });
      }
    });
    postImportedContacts();
  };

  useEffect(() => {
    getContacts();
  }, [page]);
  console.log("Imported Contacts", importedContacts);
  console.log("User token", user.token);
  console.log("Page no", page);

  return (
    <section className="tab">
      <ContactsWrapper>
        <Appbar handleShowProfile={props.handleShowProfile} />
        <SearchInput
          placeholder="Search for a contact"
          handleSearchText={handleSearchText}
        />
        <FilterBar title="All Contacts" responseCallback={responseCallback} />
        <div className="contacts-feed">
          <div className="divider-container">
            <div>
              {createArrayAtoZ().map((letter) => (
                <>
                  <LetterDivider letter={letter} id={letter} />
                  {contacts
                    .filter((contact) => {
                      return (
                        contact.fullname
                          .toLowerCase()
                          .includes(searchText.toLowerCase()) ||
                        contact.fullname
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      );
                    })

                    .filter(
                      (contact) =>
                        contact.fullname[0].toLowerCase() ===
                        letter.toLowerCase()
                    )
                    .map((contact) => (
                      <HomeCard name={contact.fullname} />
                    ))}
                </>
              ))}
            </div>
            <Pagination
              defaultCurrent={1}
              showSizeChanger
              showQuickJumper
              total={pageData * 10}
              onChange={(page) => setPage(page)}
            />
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
  .ant-pagination {
    margin-block: 20px;
    text-align: center;
  }

  .ant-pagination-item-active,
  .ant-pagination-item:focus-visible,
  .ant-pagination-item:hover {
    border-color: var(--background-theme);
  }
  .ant-pagination-item-active a,
  .ant-pagination-item:focus-visible a,
  .ant-pagination-item:hover a {
    color: var(--background-theme);
  }
`;
