import { loadyaml } from './loadyaml.ts';
import { type Static, type TSchema, Type } from '@sinclair/typebox';
import { Ajv } from 'ajv';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ajv = new Ajv();

export interface LoadConf {
	<Schema extends TSchema>(schema: Schema): Static<Schema>;
}

export namespace LoadConf {
	export function create(configDir: string, configFile = 'config.yaml'): LoadConf {
		const config = loadyaml(pathToFileURL(join(configDir, configFile)), Type.Any());
		return function loadconf<Schema extends TSchema>(schema: Schema): Static<Schema> {
			if (ajv.validate(schema, config)) return config;
			else throw new Error(ajv.errorsText(ajv.errors));
		}
	}
}
