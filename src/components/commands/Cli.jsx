import React from "react";
import Typewriter from "typewriter-effect";
import { hiddenTextCommands } from "./Commands";

const Cli = () => {
  const cliTexts = hiddenTextCommands.cli.texts;

  return (
    <div>
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < cliTexts.length; i++) {
            typewriter.typeString(cliTexts[i]);
            if (i < cliTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default Cli;
