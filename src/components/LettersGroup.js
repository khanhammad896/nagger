import React from "react";
import styled from "styled-components";
const LettersGroup = () => {
  let createArrayAtoZ = (_) => {
    return Array.apply(null, { length: 26 }).map((x, i) =>
      String.fromCharCode(65 + i)
    );
  };

  return (
    <>
      <LettersGroupWrapper>
        {createArrayAtoZ().map((letter) => (
          <a href={`#${letter}`}>
            <span className="letters">{letter}</span>
          </a>
        ))}
      </LettersGroupWrapper>
    </>
  );
};

export default LettersGroup;

const LettersGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10px;

  .letters,
  .letters-selected {
    font-size: 0.7em;
    font-family: var(--font-light);
    color: var(--text-dark);
    cursor: pointer;
    opacity: 30%;
  }

  .letters-selected {
    font-size: 1em;
    opacity: 100%;
  }
  a {
    line-height: 12px;
  }
`;
