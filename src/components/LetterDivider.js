import React from "react";
import styled from "styled-components";
const LetterDivider = (props) => {
  return (
    <>
      <LetterDividerWrapper id={props.id}>
        <span className="divider-text">{props.letter}</span>
        <div className="divider-line" />
      </LetterDividerWrapper>
    </>
  );
};

export default LetterDivider;

const LetterDividerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-inline: auto;
  margin-block-start: 20px;

  .divider-text {
    font-size: 1.2em;
    color: var(--text-dark);
    font-family: var(--font-regular);
  }
  .divider-line {
    flex-grow: 1;
    height: 2px;
    background-color: var(--background-theme);
    opacity: 40%;
    margin-inline: 10px;
  }
`;
