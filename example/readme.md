# Simple
```ts
// parse.ts
import * as deno from "deno";
import minimist from "https://github.com/kt3k/minimist";
const args = minimist(deno.args.slice(1));
console.dir(args);
```

```bash
$ deno parse.ts -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }
```

```bash
$ deno parse.ts -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```
