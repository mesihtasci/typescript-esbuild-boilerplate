import pkg from 'npm-dts';
const { Generator } = pkg;

new Generator(
  {
    entry: 'src/index.ts',
    output: 'dist/index.d.ts',
    tsc: '--extendedDiagnostics',
    logLevel: 'debug',
  },
  true,
).generate();
