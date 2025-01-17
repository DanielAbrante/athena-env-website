import { execSync, spawn } from "node:child_process";
import { readdirSync, watch } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { exit } from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pcsx2AppimageCommand = "";
const pcsx2AppimageArgs = ["-fastboot", "-nogui", "-elf"];

const pcsx2FlatpakCommand = "flatpak";
const pcsx2FlatpakArgs = [
  "run",
  "net.pcsx2.PCSX2",
  "-fastboot",
  "-nogui",
  "-elf",
];

const ELF_NAME = readdirSync(__dirname).filter(
  (file) => extname(file) === ".elf"
)[0];
const ELF_BASENAME = basename(ELF_NAME, ".elf");
const ELF_ABSOLUTE_PATH = join(__dirname, ELF_NAME);

let pcsx2;

if (pcsx2AppimageCommand) {
  try {
    execSync(`which ${pcsx2AppimageCommand}`);
  } catch (error) {
    if (error) {
      console.error("AppImage isn't available.");
      exit(1);
    }
  }
  pcsx2 = spawn(pcsx2AppimageCommand, [
    ...pcsx2AppimageArgs,
    ELF_ABSOLUTE_PATH,
  ]);
} else {
  try {
    execSync(
      `which flatpak && flatpak override --user --filesystem=${__dirname} net.pcsx2.PCSX2`
    );
  } catch (error) {
    if (error) {
      console.error("Flatpak isn't available.");
      exit(1);
    }
  }

  pcsx2 = spawn(pcsx2FlatpakCommand, [...pcsx2FlatpakArgs, ELF_ABSOLUTE_PATH]);
}

const x11Command = "xdotool";
const findWindowArgs = ["search", "--name", `${ELF_BASENAME} \\[\\?\\]`];

const TOGGLE_TURBO_KEY = "F4";
const RESET_VIRTUAL_MACHINE_KEY = "ctrl+r";

spawn(x11Command, [
  "search",
  "--name",
  "--sync",
  `${ELF_BASENAME} \\[\\?\\]`,
  "key",
  TOGGLE_TURBO_KEY,
]);

const debounce = (fn, delay) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const handleFileChange = debounce(() => {
  console.clear();
  console.log("Restarting...");
  isBooted = false;

  spawn(x11Command, [
    "search",
    "--name",
    `${ELF_BASENAME} \\[\\?\\]`,
    "key",
    RESET_VIRTUAL_MACHINE_KEY,
    TOGGLE_TURBO_KEY,
  ]);
}, 100);

watch(__dirname, { recursive: true }, (event, filename) => {
  if (filename && event === "change") {
    handleFileChange();
  }
});

const STOP_MESSAGE = "audsrv_adpcm_init()";

let isBooted = false;

console.clear();
console.log("Starting...");

pcsx2.stdout.setEncoding("utf8");
pcsx2.stdout.on("data", (data) => {
  if (isBooted) {
    console.log(data);
  }

  if (data.includes(STOP_MESSAGE)) {
    console.clear();

    spawn(x11Command, [...findWindowArgs, "key", TOGGLE_TURBO_KEY]);

    isBooted = true;
  }
});

process.on("SIGINT", () => {
  console.clear();
  console.log("\nClosed.");
  process.exit(0);
});
