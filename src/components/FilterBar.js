import React from "react";
import styled from "styled-components";
import { GoSettings } from "react-icons/go";
const FilterBar = (props) => {
  return (
    <>
      <FilterBarWrapper>
        <div className="filter-bar-header font-regular text-dark">
          <span>{props.title}</span>
        </div>
        <div className="filter-bar-icon">
          <GoSettings />
        </div>
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

  @media screen and (max-width: 400px) {
    .filter-bar-header,
    .filter-bar-icon {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 320px) {
    .filter-bar-header,
    .filter-bar-icon {
      font-size: 12px;
    }
  }
`;
