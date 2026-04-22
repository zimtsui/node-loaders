import YAML from 'yaml';
import { type Static, type TSchema } from 'typebox';
import { Parse } from 'typebox/schema';
import { loadtext } from './loadtext.ts';


export function loadyaml<Schema extends TSchema>(filePath: string, schema: Schema): Static<Schema> {
	const yaml = loadtext(filePath);
	const json = YAML.parse(yaml);
	return Parse(schema, json);
}
