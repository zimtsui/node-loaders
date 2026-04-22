import { resolve } from 'node:path';
import { loadyaml } from './loadyaml.ts';
import { type Static, type TSchema, Type } from 'typebox';
import { Parse } from 'typebox/schema';


export interface LoadConf {
	<Schema extends TSchema>(schema: Schema): Static<Schema>;
}

export namespace LoadConf {
	export function create(filePath: string, basePath = ''): LoadConf {
		const finalPath = resolve(basePath, filePath);
		const config = loadyaml(finalPath, Type.Any());
		return function loadconf<Schema extends TSchema>(schema: Schema): Static<Schema> {
			return Parse(schema, config);
		}
	}
}
