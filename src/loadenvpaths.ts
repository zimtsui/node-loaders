import { resolve } from 'node:path';
import envPaths, { type Paths } from 'env-paths';


export class EnvPathLoader {
	private paths: Paths;
	public constructor(appName: string) {
		this.paths = envPaths(appName, { suffix: '' });
	}
	public config(envar?: string): string {
		return resolve(envar || this.paths.config);
	}

	public data(envar?: string): string {
		return resolve(envar || this.paths.data);
	}

	public log(envar?: string): string {
		return resolve(envar || this.paths.log);
	}
}
