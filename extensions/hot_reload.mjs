import { watch, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname} from 'node:path';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pcsx2_config = {
    path: "",
    elf_name: "",
    args: ['-fastboot', '-nogui', '-elf'],
}

const elf_path = join(__dirname, `${pcsx2_config.elf_name}.elf`)
const pcsx2 = spawn(pcsx2_config.path, [...pcsx2_config.args, elf_path]);

const command = 'xdotool';
const find_game_window = [
    'search', '--name', `${pcsx2_config.elf_name} \\[\\?\\]`,
];

const TOGGLE_TURBO_KEY = 'Tab';
const RESET_VIRTUAL_MACHINE_KEY = 'alt+r';

const fastForward = () => spawn(command, [...find_game_window, 'key', TOGGLE_TURBO_KEY]);
const reload = () => spawn(command, [...find_game_window, 'key', RESET_VIRTUAL_MACHINE_KEY, TOGGLE_TURBO_KEY]);

const ignored_folders = ['node_modules', 'assets', '@types', '.git'];
const debounceTimers = {};

const monitorDirectory = (directory) => {
    try {
        const entries = readdirSync(directory, { withFileTypes: true });

        for (const entry of entries) {
            const entryPath = join(directory, entry.name);

            if (entry.isDirectory() && !ignored_folders.includes(entry.name)) {
                monitorDirectory(entryPath);
            } else if (entry.isFile() && entry.name.endsWith('.js')) {
                watch(entryPath, () => {
                    clearTimeout(debounceTimers[entryPath]);
                    console.clear();
                    console.log('Restarting...');
                    debounceTimers[entryPath] = setTimeout(reload, 200);
                });

            }
        };
    } catch (err) {
        console.error(`Error: ${directory} - ${err}`);
    }
};

monitorDirectory(__dirname);

const boot_message = 'Graphics Driver Info'
let isBooted = false;

console.clear();
console.log('Starting...');

pcsx2.stdout.setEncoding('utf8');
pcsx2.stdout.on('data', (data) => {
    if (!isBooted && data.includes(boot_message)) {
        fastForward();
    }

    if (data.includes('AthenaEnv Started')) {
        console.clear();
        isBooted = true;
        fastForward();
    }

    if (isBooted) {
        console.log(data);
    }
});

process.on('SIGINT', () => {
    console.clear();

    console.log('\nClosed.');
    process.exit(0);
});
