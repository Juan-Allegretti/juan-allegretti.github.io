import React from "react";
import MapConsoleOutput from "./MapConsoleOutput";
import Prompt from "./Prompt";
import PasswordPrompt from "./PasswordPrompt";
import Contact from "../commands/Contact";
import Help from "../commands/Help";
import About from "../commands/About";
import Social from "../commands/Social";
import Banner from "../commands/Banner";
import Projects from "../commands/Projects";
import Cli from "../commands/Cli";
import AllCommands from "../commands/AllCommands";
import CommandError from "../commands/CommandError";
import WelcomeMsg from "./WelcomeMsg";
import InputNotAllowedTypewriter from "../commands/InputNotAllowedTYpewriter";
import InputNotAllowed from "../commands/InputNotAllowed";
import {
  isValidCommand,
  isPrintCommand,
  isFunctionCommand,
  isRedirectCommand,
  autocompleteCommand,
  isNotAllowedInput,
  getAllowedInputAction,
  getAllowedInputMessage,
  getNotAllowedInputAction,
  getNotAllowedInputMessage,
  isAllowedInput,
} from "../utils/commandUtils";

import { rickRoll, closeTab, downloadCV } from "../utils/miscUtils";
import { hashText } from "../utils/textUtils";
import { textCommands, redirectCommands } from "../commands/Commands";
import "./cli.css";
import { _ } from "ajv";
import SuRoot from "../commands/SuRoot";

const Terminal = () => {
  const inputText = React.useRef();
  const scrollRef = React.useRef();

  const [input, setInput] = React.useState("");
  const [terminalOutput, setTerminalOutput] = React.useState([]);

  const [isAwaitingPassword, setIsAwaitingPassword] = React.useState(false);

  const [isRoot, setIsRoot] = React.useState(false);

  const [historyCommands, setHistoryCommands] = React.useState([]);
  const [historyCommandsPosition, setHistoryComandsPosition] =
    React.useState(0);

  const bannerText = textCommands.banner.texts[0];

  const commandsMap = {
    social: <Social />,
    contact: <Contact />,
    about: <About />,
    help: <Help />,
    banner: <Banner />,
    all: <AllCommands />,
    projects: <Projects />,
    cli: <Cli />,
    whois: <About />,
  };

  const secret =
    "0cb42a8d3bffd99356dacb0838465321548d0172a6b8113dcbbd471a94638d9f"; // Congratuliations! You found the secret. Good luck reverse engineering the hash :)

  React.useEffect(() => {
    inputText.current.focus();
    inputText.current.selectionEnd = inputText.current.value.length;
    scrollRef.current?.scrollIntoView();
  });

  //Navigate through the history of commands
  const getCommandFromHistory = (key) => {
    if (key === "ArrowUp") {
      if (
        historyCommands.length > 0 &&
        historyCommands.length > historyCommandsPosition
      ) {
        setHistoryComandsPosition(historyCommandsPosition + 1);
        return historyCommands[
          historyCommands.length - historyCommandsPosition - 1
        ];
      } else {
        return historyCommands[
          historyCommands.length - historyCommandsPosition
        ];
      }
    } else if (key === "ArrowDown") {
      if (historyCommands.length > 0 && historyCommandsPosition > 1) {
        setHistoryComandsPosition(historyCommandsPosition - 1);
        return historyCommands[
          historyCommands.length - historyCommandsPosition + 1
        ];
      } else if (historyCommandsPosition <= 1) {
        setHistoryComandsPosition(0);
        return "";
      }
    }
  };

  const handleKeyDown = (value, e) => {
    const commandRecord = (
      <div
        ref={(element) => (scrollRef.current = element)}
        className="terminal-command-record"
      >
        <span className="terminal-prompt">
          {isAwaitingPassword ? <PasswordPrompt /> : <Prompt />}
        </span>
        {!isAwaitingPassword ? value : ""}
      </div>
    );

    const handlePageRedirect = (p) => {
      setTerminalOutput([
        ...terminalOutput,
        commandRecord,
        `Redirecting to ${p.title}...`,
      ]);
      setInput("");
      setTimeout(() => {
        window.open(p.url, "_blank");
      }, 1000);
    };

    if (isAwaitingPassword) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (hashText(value) === secret) {
          setTerminalOutput([...terminalOutput, commandRecord, <SuRoot />]);
        } else {
          setTerminalOutput([
            ...terminalOutput,
            commandRecord,
            "Sorry! Wrong password.",
          ]);
        }
        setIsAwaitingPassword(false);
        setIsRoot(true);
        setInput("");
      }
      return;
    }

    switch (e.key) {
      case "Tab":
        e.preventDefault();
        if (input.trim() !== "") {
          const matchedCommands = autocompleteCommand(value);
          if (matchedCommands.length === 1) {
            setInput(matchedCommands[0]);
          }
          //If there are more than one matched commands, print in the console the matched commands. If there are no matched commands, do nothing
          else if (matchedCommands.length > 1 && matchedCommands != -1) {
            setTerminalOutput([
              ...terminalOutput,
              commandRecord,
              matchedCommands.join("     "),
            ]);
          }
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        const commandUp = getCommandFromHistory(e.key);
        setInput(commandUp);
        break;
      case "ArrowDown":
        e.preventDefault();
        const commandDown = getCommandFromHistory(e.key);
        setInput(commandDown);
        break;
      case "Enter":
        e.preventDefault();
        setHistoryComandsPosition(0);
        setInput("");
        if (value.trim() == "") {
          setTerminalOutput([...terminalOutput, commandRecord]);
          break;
        }
        setHistoryCommands([...historyCommands, value]);
        if (!isValidCommand(value)) {
          if (isNotAllowedInput(value)) {
            switch (getNotAllowedInputAction(value)) {
              case "rickroll":
                setTerminalOutput([
                  ...terminalOutput,
                  commandRecord,
                  <InputNotAllowed
                    message={getNotAllowedInputMessage(value)}
                  />,
                ]);
                setTimeout(() => {
                  rickRoll();
                }, 2000);
                break;
              case null:
                setTerminalOutput([
                  ...terminalOutput,
                  commandRecord,
                  <InputNotAllowedTypewriter
                    message={getNotAllowedInputMessage(value)}
                  />,
                ]);
                break;
            }
          } else if (isRoot && isAllowedInput(value)) {
            switch (getAllowedInputAction(value)) {
              case "rickroll":
                setTerminalOutput([
                  ...terminalOutput,
                  commandRecord,
                  <InputNotAllowed message={getAllowedInputMessage(value)} />,
                ]);
                setTimeout(() => {
                  rickRoll();
                }, 2000);
                break;
              case null:
                setTerminalOutput([
                  ...terminalOutput,
                  commandRecord,
                  <InputNotAllowedTypewriter
                    message={getAllowedInputMessage(value)}
                  />,
                ]);
                break;
              case "downloadcv":
                setTerminalOutput([
                  ...terminalOutput,
                  commandRecord,
                  <InputNotAllowedTypewriter message={getAllowedInputMessage(value)} />,
                ]);
                setTimeout(() => {
                  downloadCV();
                }, 2000);
            }
          } else {
            setTerminalOutput([
              ...terminalOutput,
              commandRecord,
              <CommandError commandName={value} />,
            ]);
          }
          break;
        }
        if (isPrintCommand(value)) {
          setTerminalOutput([
            ...terminalOutput,
            commandRecord,
            commandsMap[value],
          ]);
          setInput("");
        } else if (isRedirectCommand(value)) {
          handlePageRedirect(redirectCommands[value]);
        } else if (isFunctionCommand(value)) {
          switch (value) {
            case "clear":
              setTerminalOutput([]);
              setInput("");
              break;
            case "gui":
              setTerminalOutput([
                ...terminalOutput,
                commandRecord,
                `Opening GUI (Graphical User Interface)...`,
              ]);
              setTimeout(() => {
                window.location.href = "#/gui";
              }, 2000);
              break;
            case "rickroll":
              setTerminalOutput([
                ...terminalOutput,
                commandRecord,
                `Hope you enjoy the music!`,
              ]);
              setTimeout(() => {
                rickRoll();
              }, 2000);
              break;
            case "su root":
              setTerminalOutput([...terminalOutput, commandRecord]);
              setIsAwaitingPassword(true);
              break;
            case "exit":
              closeTab();
              break;
          }
        }
    }
  };

  return (
    <div
      className="terminal-container"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Tab") e.preventDefault();
      }}
    >
      <div className="terminal-content">
        <div className="terminal-banner">{bannerText}</div>
        <WelcomeMsg />
        <MapConsoleOutput consoleOutput={terminalOutput} />
        <div className="terminal-input-area">
          {isAwaitingPassword ? <PasswordPrompt /> : <Prompt />}
          <input
            type={isAwaitingPassword ? "password" : "text"} // Set to "password" when awaiting password
            ref={inputText}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(input, e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
