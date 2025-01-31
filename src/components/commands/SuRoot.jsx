import React from "react";
import Typewriter from "typewriter-effect";
import { secretCommands } from "./Commands";

const SuRoot = () => {
  const secretTexts = secretCommands["su_root"].texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < secretTexts.length; i++) {
            typewriter.typeString(secretTexts[i]);
            if (i < secretTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default SuRoot;
