import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { FiSearch } from "react-icons/fi";
import { Input } from "antd";
import TextInput from "./TextInput";
const SearchInput = (props) => {
  const [text, setText] = React.useState("");
  return (
    <>
      <SearchWrapper>
        <div className="search-container">
          {/* <TextField
            value={text}
            type="text"
            id="standard-basic"
            placeholder={props.placeholder}
            onChange={(e) => setText(e.target.value)}
          /> */}
          <TextInput
            inputColor="dark"
            placeholder={props.placeholder}
            setField={props.handleSearchText}
          />
          <div className="search-icon-container">
            <FiSearch />
          </div>
        </div>
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

  .search-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px 20px 10px 0px;
  }

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after,
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border: none;
  }

  .MuiInputBase-input {
    font-family: var(--font-regular);
    color: var(--text-dark);
  }

  .search-icon-container {
    width: 40px;
    height: 36.33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--tab-theme);
    border-radius: 35%;
  }

  .search-icon-container svg {
    font-size: 1.5em;
    color: #939cb5;
  }
  @media screen and (max-width: 400px) {
    .MuiInputBase-root {
      height: 55px;
    }
  }
`;
