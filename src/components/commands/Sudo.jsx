import React from "react";
import Typewriter from "typewriter-effect";
import { hiddenTextCommands } from "./Commands";

const Sudo = () => {
  const sudoTexts = hiddenTextCommands.sudo.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < sudoTexts.length; i++) {
            typewriter.typeString(sudoTexts[i]);
            if (i < sudoTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Sudo;
