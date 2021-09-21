import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Input } from "antd";

const TextInput = (props) => {
  const input = () => {
    if (!props.password) {
      return (
        <TextField
          placeholder={props.placeholder}
          onChange={(e) => {
            props.setField(e.target.value);
          }}
          value={props.value}
          maxLength={props.maxLength}
        />
      );
    } else {
      return (
        <Input.Password
          placeholder={props.placeholder}
          bordered={false}
          onChange={(e) => props.setField(e.target.value)}
          value={props.value}
        />
      );
    }
  };
  return (
    <>
      <TextInputWrapper {...props}>{input()}</TextInputWrapper>
    </>
  );
};

export default TextInput;

const TextInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;  

  .MuiFormControl-root {
    width: 100%;
    border-bottom: ${(props) => {
      if (props.border === "light") {
        return `2px solid var(--tab-theme)`;
      }
      if (props.border === "dark") {
        return `1px solid var(--text-dark)`;
      } else {
        return `none`;
      }
    }};
}
  
    .MuiInput-underline: after,
  .MuiInput-underline:before,
  .MuiInput-underline:hover:not(.Mui-disabled):before{
    border:none;
  }
  
  .MuiInputBase-input{
  font-family: var(--font-light);
  color: ${(props) =>
    props.inputColor === "light" ? `var(--tab-theme)` : `var(--text-dark)`};
    padding-inline: 20px;
    font-size: 1.1em;
  }
  
  .MuiInputBase-input::placeholder{
    color: ${(props) =>
      props.placeholderColor === "light"
        ? `var(--tab-theme)`
        : `var(--text-dark)`} !important;
    font-family: var(--font-light);
    opacity: 45%;
  }


  
  .ant-input, .ant-input-password{
    background: transparent;
  }
  
  
  .ant-input-password{
    padding-inline: 20px;
    border-bottom: ${(props) => {
      if (props.border === "light") {
        return `2px solid var(--tab-theme)`;
      }
      if (props.border === "dark") {
        return `1px solid var(--text-dark)`;
      } else {
        return `none`;
      }
    }};
    font-family: var(--font-light);
    font-size: 16px;
  }
  
  .ant-input{
    font-size: 1.1em !important;
    color: ${(props) =>
      props.inputColor === "light" ? `var(--tab-theme)` : `var(--text-dark)`};
  }
  
  .ant-input::placeholder{
    color: ${(props) =>
      props.placeholderColor === "light"
        ? `var(--tab-theme)`
        : `var(--text-dark)`} !important;
    font-family: var(--font-light);
    opacity: 50%;
  }

  .ant-input-suffix svg{
    color: var(--tab-theme);
    font-size: 1.5em;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover{
    border-bottom: ${(props) => {
      if (props.border === "light") {
        return `2px solid var(--tab-theme)`;
      }
      if (props.border === "dark") {
        return `1px solid var(--text-dark)`;
      } else {
        return `none`;
      }
    }};
  }
  
`;
