import React from "react";
import { useHistory } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3em",
          fontFamily: "var(--font-regular)",
          color: "var(--tab-theme",
          opacity: "60%",
          textAlign: "center",
          textJustify: "center",
          flexDirection: "column",
        }}
      >
        Ooops! You are at wrong place.
      </div>
    </>
  );
};

export default NotFound;
