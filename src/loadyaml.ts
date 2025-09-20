import YAML from 'yaml';
import { type Static, type TSchema } from '@sinclair/typebox';
import { Ajv } from 'ajv';
import { loadtext } from './loadtext.ts';


const ajv = new Ajv();
export function loadyaml<Schema extends TSchema>(fileURL: URL | string, schema: Schema): Static<Schema> {
	const file = loadtext(fileURL);
	const parsed = YAML.parse(file);
	if (ajv.validate(schema, parsed)) {} else throw new Error(ajv.errorsText(ajv.errors));
	return parsed as Static<Schema>;
}
