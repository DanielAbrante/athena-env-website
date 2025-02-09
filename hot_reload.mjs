// Instructions
// 1. Access your pcsx2 settings to modify the key combination for resetting the virtual machine.
// 2. Open the **hot_reload.mjs** file and set the RESET_VIRTUAL_MACHINE_KEY variable to match your desired key combination.
//      Example: const RESET_VIRTUAL_MACHINE_KEY = "ctrl+r";
// 3 (optional) If you are using the **AppImage** version of PCSX2, set the appimage variable to the full path of your AppImage file.
//      Example: const appimage = "/home/user/Applications/pcsx2.AppImage";
// 4. Run the project: node hot_reload.mjs

import { execSync, spawn } from "node:child_process";
import { readdirSync, watch } from "node:fs";
import { basename, dirname, join } from "node:path";
import { exit } from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pcsx2_args = ["-fastboot", "-nogui", "-elf"];

const appimage = "";

const ELF_NAME = readdirSync(__dirname).find((file) => file.endsWith(".elf"));
const ELF_BASENAME = basename(ELF_NAME, ".elf");
const ELF_ABSOLUTE_PATH = join(__dirname, ELF_NAME);

let pcsx2;

if (appimage) {
	try {
		execSync(`which ${appimage}`);

		pcsx2 = spawn(appimage, [...pcsx2_args, ELF_ABSOLUTE_PATH]);
	} catch (error) {
		if (error) {
			console.error("Error: AppImage isn't available.");
			exit(1);
		}
	}
} else {
	try {
		execSync(
			`which flatpak && flatpak override --user --filesystem=${__dirname} net.pcsx2.PCSX2`,
		);

		pcsx2 = spawn("flatpak", [
			"run",
			"net.pcsx2.PCSX2",
			pcsx2_args,
			ELF_ABSOLUTE_PATH,
		]);
	} catch (error) {
		if (error) {
			console.error("Error: Flatpak isn't available.");
			exit(1);
		}
	}
}

const x11_command = "xdotool";
const find_window_args = ["search", "--name", `${ELF_BASENAME} \\[\\?\\]`];

const TOGGLE_TURBO_KEY = "F4";
const RESET_VIRTUAL_MACHINE_KEY = "";

spawn(x11_command, [
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

	spawn(x11_command, [
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
const MESSAGES_WHEN_BOOTED = [
	"UpdateVSyncRate: Mode Changed to NTSC.",
	"Setting vsync mode: Disabled",
	"read/write allocate memory 4000",
];
const hide_messages_booted = (data) =>
	MESSAGES_WHEN_BOOTED.some((message) => data.includes(message));

let isBooted = false;

console.clear();
console.log("Starting...");

pcsx2.stdout.setEncoding("utf8");
pcsx2.stdout.on("data", (data) => {
	if (isBooted && !hide_messages_booted(data)) {
		console.log(data);
	}

	if (data.includes(STOP_MESSAGE)) {
		console.clear();

		spawn(x11_command, [...find_window_args, "key", TOGGLE_TURBO_KEY]);

		isBooted = true;
	}
});

process.on("SIGINT", () => {
	console.clear();
	console.log("\nClosed.");
	process.exit(0);
});
