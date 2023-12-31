import React from "react";
import Typewriter from "typewriter-effect";

const WelcomeMsg = () => {
  const welcomeTexts = [
    `Welcome to my personal website! Type <span class='command'>help</span> to see the available commands.`,
    `If you don't want to use CLI, you can type <span class='command'>gui</span> to switch to Graphical User Interface mode.`,
  ];

  return (
    <div className="terminal-welcome-message">
      <Typewriter
        options={{ cursor: "" }}
        onInit={(typewriter) => {
          typewriter.changeDelay(1);

          for (let i = 0; i < welcomeTexts.length; i++) {
            typewriter.typeString(welcomeTexts[i]);
            if (i < welcomeTexts.length - 1) {
              typewriter.typeString("<br />");
            }
          }
          typewriter.start();
        }}
      />
    </div>
  );
};

export default WelcomeMsg;
