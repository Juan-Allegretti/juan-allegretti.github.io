import React from "react";

// This is the prompt with the user and a symbol separating them.
const Prompt = () => (
  <div>
    <span class="terminal-prompt-arrow">➜</span>
    <span class="terminal-prompt-arrow">&nbsp;guest</span>
    <span class="terminal-prompt-text">
      @juanallegretti.dev.ar
      <span class="terminal-prompt-home">&nbsp;~</span>&nbsp;
    </span>
  </div>
);

export default Prompt;
