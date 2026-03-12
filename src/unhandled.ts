import { console } from './console.ts';
import process from 'node:process';


process.on('uncaughtException', e => {
    console.error(e);
    process.exit(1);
});
