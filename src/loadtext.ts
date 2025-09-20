import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';


export function loadtext(fileUrl: string | URL): string {
	return readFileSync(fileURLToPath(fileUrl), 'utf8');
}
