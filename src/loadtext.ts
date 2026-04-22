import { readFileSync } from 'node:fs';


export function loadtext(filePath: string): string {
	return readFileSync(filePath, 'utf-8');
}
