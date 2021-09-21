import React from "react";
import styled from "styled-components";
const InputError = (props) => {
  return (
    <>
      <InputErrorWrapper>
        <div className="input-error font-light">
          {<span>{props.error}</span>}
        </div>
      </InputErrorWrapper>
    </>
  );
};

export default InputError;

const InputErrorWrapper = styled.div`
  .input-error {
    width: max-content;
    margin-top: 5px;
  }
  .input-error span {
    font-size: 1em;
    color: #e84c40;
    width: max-content;
  }
`;
