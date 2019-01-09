import * as deno from "deno";
import minimist from "https://raw.githubusercontent.com/kt3k/deno_minimist/master/src/index.ts";
const args = minimist(deno.args.slice(1));
console.dir(args);
