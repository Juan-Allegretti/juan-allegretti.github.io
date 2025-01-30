import { getAge, getYear } from "../utils/timeUtils";

export const redirectCommands = {
  instagram: {
    title: "Instagram",
    url: "https://www.instagram.com/juan.allegretti",
  },
  twitter: { title: "Twitter", url: "https://www.twitter.com/juanallegretti" },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/juanallegretti",
  },
  github: { title: "GitHub", url: "https://www.github.com/juan-allegretti" },
  facebook: {
    title: "Facebook",
    url: "https://www.facebook.com/people/Juan-Allegretti/pfbid037TtX5Jrq2Yes3g8T9qxxoAHXJQETLz5RMXCGrwwUzvJ8PTnGF6Mw4b6DJ5xG3rmzl/",
  },
  threads: { title: "Threads", url: "https://www.threads.net/juan.allegretti" },
  email: { title: "Email", url: "mailto:juan.allegretti@outlook.com" },
  x: { title: "X", url: "https://www.x.com/juanallegretti" },
  github: {
    title: "GitHub",
    url: "https://www.github.com/juan-allegretti",
  },
};

export const textCommands = {
  about: {
    title: "About",
    texts: [
      `I am a ` +
        getAge("1993-06-15") +
      `-year-old <span class="terminal-highlight">Computer Engineer</span> graduated from <a href="https://www.unlam.edu.ar/" target="_blank">UNLaM</a> with a focus on backend development, specializing in <span class="terminal-highlight">Python</span>, and a background in the <span class="terminal-highlight">cybersecurity</span> field.`,
      `As well, I have a keen interest in crypto and blockchain technologies.`,
      `In 2020, I joined <span class="terminal-highlight">Mercado Libre</span>, one of the largest tech companies in Latin America, where I have the opportunity of sharpening my backend development skills, honing my expertise in building applications. I also have the opportunity to apply my academic knowledge in real-world scenarios, contributing to the company's success and security. `,
      `I am always open to new challenges that allow me to leverage my backend development skills, cybersecurity background, and enthusiasm for crypto and blockchain.`,
      ``,
    ],
  },
  projects: {
    title: "Projects",
    texts: [
      `Currently, my projects are confidential. You can also see my GitHub profile where you will mostly find repositories with some practical exercises carried out in my university days.`,
      ``,
      `<span class="command">github</span>       <a href="${redirectCommands.github.url}">Juan-Allegretti</a>`,
      ``,
    ],
  },
  contact: {
    title: "Contact",
    texts: [
      `If you have any questions, interesting projects, or simply want to say hello, feel free to reach out to me`,
      ``,
      `   <span class="command">email</span>        Write me at <a href="${redirectCommands.email.url}">juan.allegretti@outlook.com</a>`,
      `   <span class="command">linkedin</span>     Follow me on <a href="${redirectCommands.linkedin.url}">@JuanAllegretti</a>`,
      `You can also contact me on my social networks. Just type the command <span class="command">social</span> and start following me!`,
      ``,
    ],
  },
  social: {
    title: "Social",
    texts: [
      `Here are my social media profiles. Feel free to follow me! You can type the command or click on the link.`,
      ``,
      `   <span class="command">linkedin</span>     <a href="${redirectCommands.linkedin.url}">@Juan-Allegretti</a>`,
      `   <span class="command">x</span>            <a href="${redirectCommands.x.url}">@JuanAllegretti</a>`,
      `   <span class="command">instagram</span>    <a href="${redirectCommands.instagram.url}">@Juan.Aallegretti</a>`,
      `   <span class="command">threads</span>      <a href="${redirectCommands.threads.url}">@Juan.Allegretti</a>`,
      `   <span class="command">facebook</span>     <a href="${redirectCommands.facebook.url}">@Juan Allegretti</a>`,
      ``,
    ],
  },
  help: {
    title: "Help",
    texts: [
      `Type one of the following commands. You can start typing some letters and then press the <span class="terminal-highlight">Tab</span> key to autocomplete the command. `,
      `Also you can use <span class="terminal-highlight">ArrowUp</span> and <span class="terminal-highlight">ArrowDown</span> to navigate through the history of commands.`,
      ``,
      `   <span class="command">about</span>          About me`,
      `   <span class="command">social</span>         Social media profiles`,
      `   <span class="command">contact</span>        Contact information`,
      `   <span class="command">clear</span>          Clear the terminal`,
      `   <span class="command">help</span>           Show this help message`,
      `   <span class="command">projects</span>       My projects`,
      `   <span class="command">all</span>            Display all the commands`,
      `   <span class="command">banner</span>         Display the banner`,
      `   <span class="command">gui</span>            Switch to GUI mode`,
      ``,
    ],
  },
  banner: {
    title: "Banner",
    texts: [
      "   _                           _ _                     _   _   _ \n" +
        "  (_)_   _  __ _ _ __     __ _| | | ___  __ _ _ __ ___| |_| |_(_)\n" +
        "  | | | | |/ _` | '_ \\   / _` | | |/ _ \\/ _` | '__/ _ \\ __| __| |\n" +
        "  | | |_| | (_| | | | | | (_| | | |  __/ (_| | | |  __/ |_| |_| |\n" +
        " _/ |\\__,_|\\__,_|_| |_|  \\__,_|_|_|\\___|\\__, |_|  \\___|\\__|\\__|_|\n" +
        "|__/                                    |___/" +
        "\n" +
        "                                                        \u00A9 " +
        getYear(),
        ``,
    ],
  }
};

export const hiddenTextCommands = {
  cli: {
    title: "CLI",
    texts: [
      `You are already using the CLI. If you want to switch to GUI mode, type the command <span class="command">gui</span>.`,
      ``,
    ],
  },
};

export const inputNotAllowedPatterns = [
  {
    name: "sudo",
    pattern: /^sudo\s|^sudo$/,
    message: "Permission denied...",
    action: "rickroll",
  },
  {
    name: "ls",
    pattern: /^ls\s|^ls$/,
    message: "There's nothing to list here. No files, no directories, no secrets... For now!",
    action: null,
  },
  {
    name: "cd",
    pattern: /^cd\s|^cd$/,
    message: "No such file or directory...",
  action: null,
  },
  {
    name: "shutdown",
    pattern: /^shutdown\s|^shutdown$/,
    message: "System shutting down... Just kidding! You can't shut me down. Nice try, though!",
    action: "rickroll",
  },
  {
    name: "reboot",
    pattern: /^reboot\s|^reboot$/,
    message: "You can't reboot me! I'm unstoppable! Maybe try turning yourself off and on again instead.",
      action: "rickroll",
  },
  {
    name: "rm -rf",
    pattern: /^rm -rf\s|^rm -rf$/,
    message: "Nothing to delete here! No files, no directories... And even if there were, do you really think I'd let you?",
      action: null,
  },
  {
    name: "killall",
    pattern: /^killall\s|^killall$/,
    message: "No processes to kill here! Everything is running smoothly... Except maybe your plans.",
    action: null,
  },
  {
    name: "pkill",
    pattern: /^pkill\s|^pkill$/,
    message: "No processes to kill here! Everything is running smoothly... Looks like you need better tactics!",
      action: null,
  },
  {
    name: "whoami",
    pattern: /^whoami$/,
    message: "You are in. Welcome to fsociety, anonymous!",
      action: null,
  },
  {
    name: "passwd",
    pattern: /^passwd\s|^passwd$/,
    message: "Trying to change the password? Sorry, this system has 2FA and a firewall!",
      action: null,
  },
  {
    name: "netstat",
    pattern: /^netstat\s|^netstat$/,
    message: "Looking for network connections? All encrypted, nothing to see here!",
      action: null,
  },
  {
    name: "wget",
    pattern: /^wget\s|^wget$/,
    message: "Downloading malicious payloads? Not on my watch!",
      action: "rickroll",
  },
  {
    name: "curl",
    pattern: /^curl\s|^curl$/,
    message: "Downloading malicious payloads? Not on my watch!",
      action: "rickroll",
  },
  {
    name: "netcat",
    pattern: /^nc\s|^nc$/,
    message: "Reverse shell? I don't think so!",
      action: null,
  },
  {
    name: "nmap",
    pattern: /^nmap\s|^nmap$/,
    message: "Scanning me? You should have asked nicely!",
      action: null,
  },
  {
    name: "tcpdump",
    pattern: /^tcpdump\s|^tcpdump$/,
    message: "Packet sniffing detected! Are you trying to eavesdrop?",
      action: null,
  },
  {
    name: "iptables",
    pattern: /^iptables\s|^iptables$/,
    message: "Firewall modifications denied! My defenses remain intact.",
    action: null,
  },
  {
    name: "ufw",
    pattern: /^ufw\s|^ufw$/,
    message: "Firewall modifications denied! My defenses remain intact.",
    action: null,
  },
  {
    name: "chmod",
    pattern: /^chmod\s|^chmod$/,
    message: "No permissions for you! You can't change anything here.",
    action: null,
  },
  {
    name: "chown",
    pattern: /^chown\s|^chown$/,
    message: "Sorry, but ownership stays with me!",
      action: null,
  },
  {
    name: "echo",
    pattern: /> \/dev\/null$|> \/dev\/sda$/,
    message: "Trying to wipe my disk? Not gonna happen!",
      action: null,
  },
  {
    name: "history -c",
    pattern: /^history -c$/,
    message: "Trying to hide your tracks? Suspicious...",
    action: null,
  },
  {
    name: "su root",
    pattern: /^su root$/,
    message: "Root access denied. Go hack something else!",
      action: "rickroll",
  },
  {
    name: "scp",
    pattern: /^scp\s|^scp$/,
    message: "Trying to copy files remotely? Not today!",
    action: null,
  },
  {
    name: "rsync",
    pattern: /^rsync\s|^rsync$/,
    message: "Trying to copy files remotely? Not today!",
    action: null,
  },
  {
    name: "ssh",
    pattern: /^ssh\s|^ssh$/,
    message: "Trying to SSH? Use your own server for that!",
    action: null,
  },
  {
    name: "find",
    pattern: /find \/ -name \"\*.pem\"/,
    message: "Searching for private keys? That's cute.",
    action: null,
  },
  {
      name: "python",
      pattern: /python.*?|python3.*?|pip.*?|pip3.*?/,
      message: "Python? I love Python! But you can't run it here.",
      action: null,

  },
  {
      name: "go",
      pattern: /go.*?|golang.*?/,
      message: "You like Go? Me too! But you can't run it here.",
      action: null,
  },
  {
    name: "XSS",
    pattern: /<script.*?>|<img.*?src=.*?onerror=.*?>|<iframe.*?>|javascript:.*?|on\w+=.*?|alert\(.*?\)|document\.cookie|eval\(.*?\)/,
    message: `
XSS Detected!

Nice try, hacker! But you can't cross-site script me!
Remember I'm a cybersecurity engineer!
Try another type of vulnerability.

Sorry, but now I have to rickroll you...

    `,
    action: "rickroll",
  },
  {
    name: "SQLi",
    pattern: /'.*?(OR|AND).*?('|"|`).*?=.*?('|"|`)|".*?(OR|AND).*?('|"|`).*?=.*?('|"|`)|;.*?(DROP|DELETE|UPDATE|INSERT|SELECT).*?|UNION.*?SELECT.*?|--.*?|\/\*.*?\*\/|\bOR\s+1=1\b|\bAND\s+1=1\b|'?\s+(OR|AND)\s+['"]?.*?=.*?['"]?|'?\s+(OR|AND)\s+1=1\s*;?\s*--|"?\\s+(OR|AND)\\s+1=1\\s*;?\\s*--|\bEXEC(\s+|\()|\bINTO\s+OUTFILE\b|\bLOAD_FILE\s*\(|\bSELECT\s+.*\bFROM\b.*?\bWHERE\b.*?\b=\b.*?\s*;|'?\s+(OR|AND)\s+\d+=\d+|\b(SLEEP|BENCHMARK)\b\s*\(|\bWAITFOR\s+DELAY\b|\bHAVING\s+.*\b=.*?\b/,
    message: `
SQL Injection Detected!

Oh no you don't! No database here for you to inject SQL into. And if there was, I'd be prepared!

Sorry, but now I have to rickroll you...

`,
action: "rickroll",
  },
  {
      name: "HTMLi",
      pattern: /<div.*?>|<h1.*?>|<h2.*?>|<h3.*?>|<h4.*?>|<h5.*?>|<h6.*?>|<p.*?>|<a.*?>|<span.*?>|<.*?>/,
      message: `
  HTML injection detected!
  
  Nice try, but you can't insert HTML here. Remember I'm a cybersecurity engineer!
  Try another type of vulnerability.
  
  Sorry, but now I have to rickroll you...
      
      `,
      action: "rickroll",
    }
]


export const printTextHiddenCommandsList = [...Object.keys(hiddenTextCommands)];

export const printCommandsList = [...Object.keys(textCommands), "all"];

export const functionCommandsList = ["clear", "gui"];

