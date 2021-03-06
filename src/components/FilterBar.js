import React from "react";
import styled from "styled-components";
import { GoSettings } from "react-icons/go";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import GoogleContacts from "react-google-contacts";

const FilterBar = (props) => {
  const location = useLocation();

  return (
    <>
      <FilterBarWrapper>
        <div className="filter-bar-header font-regular text-dark">
          <span>{props.title}</span>
        </div>
        {location.pathname === "/contacts" ? (
          <div className="import-icon">
            <GoogleContacts
              clientId="302207734400-th27bfivl01dt0fingcprlj593jne7ja.apps.googleusercontent.com"
              onSuccess={props.responseCallback}
              onFailure={props.responseCallback}
            >
              <AiOutlineCloudDownload />
            </GoogleContacts>
          </div>
        ) : null}
        {/* <div className="filter-bar-icon">
          <GoSettings />
        </div> */}
      </FilterBarWrapper>
    </>
  );
};

export default FilterBar;

const FilterBarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: 20px;

  .filter-bar-header {
    flex-grow: 1;
  }

  .filter-bar-header > span {
    font-size: 2em;
  }

  .filter-bar-icon > svg {
    transform: rotate(90deg);
    font-size: 1.5em;
    cursor: pointer;
    color: var(--background-theme);
  }

  .import-icon {
    margin-inline: 20px;
    color: var(--background-theme);
    cursor: pointer;
  }

  .import-icon button {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .import-icon div {
    display: none;
  }
  .import-icon svg {
    font-size: 1.5em;
    color: var(--background-theme);
  }
  @media screen and (max-width: 400px) {
    .filter-bar-header,
    .filter-bar-icon,
    .import-icon {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 320px) {
    .filter-bar-header,
    .filter-bar-icon {
      font-size: 10px;
    }
  }
`;
