import React from "react";
import Typewriter from "typewriter-effect";

const InputNotAllowed = ( { message } ) => {

  const messages = [message];

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < messages.length; i++) {
            typewriter.typeString(messages[i]);
            if (i < messages.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default InputNotAllowed;
