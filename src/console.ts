import { Console } from 'node:console';
import { stdout, stderr } from 'node:process';


export const console = new Console({
	stdout,
	stderr,
	inspectOptions: {
		depth: null,
		colors: stderr.isTTY,
	},
});
