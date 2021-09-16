import React from "react";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FiSearch } from "react-icons/fi";
const SearchInput = () => {
  return (
    <>
      <SearchWrapper>
        <Input
          placeholder="Search for a reminder..."
          endAdornment={
            <InputAdornment>
              <FiSearch />
            </InputAdornment>
          }
        />
      </SearchWrapper>
    </>
  );
};

export default SearchInput;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiInputBase-root {
    border: none;
    width: 100%;
    background-color: #fff;
    height: 60px;
    border-radius: 15px;
  }

  .MuiInputBase-input {
    padding-inline: 20px;
    color: var(--text-dark);
    font-family: var(--font-regular);
  }
  .MuiInput-underline:before,
  .MuiInput-underline:after,
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border: none;
  }

  .MuiInputAdornment-root {
    height: 39px;
    width: 50px !important;
    background-color: var(--tab-theme);
    border-radius: 35%;
    align-items: center;
    justify-content: center;
    max-height: unset;
  }
  .MuiInputAdornment-root > svg {
    font-size: 1.2em;
    color: #9ba3bb;
  }
  .MuiInputAdornment-positionStart {
    margin-right: 15px;
  }

  @media screen and (max-width: 400px) {
    .MuiInputBase-root {
      height: 55px;
    }
  }
`;
