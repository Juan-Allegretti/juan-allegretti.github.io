import React from "react";

const InputNotAllowed = ({ message }) => {
  // Render the message as HTML using dangerouslySetInnerHTML
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: message,
      }}
    />
  );
};

export default InputNotAllowed;