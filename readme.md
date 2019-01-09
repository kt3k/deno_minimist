# deno_minimist

deno_minimist is a port of [Minimist2](https://github.com/berdon/minimist2) library for argument parsing to deno.

# Usage

```ts
import * as deno from "deno";
import minimist from "https://raw.githubusercontent.com/kt3k/deno_minimist/master/src/index.ts";
const args = minimist(deno.args.slice(1));
console.dir(args);
```

```bash
$ deno example/parse.ts -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
```

```bash
$ deno example/parse.ts -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```
