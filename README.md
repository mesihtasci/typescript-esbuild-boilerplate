# Description

This is a quickstart boilerplate with settings for creating node packages with typescript. ESBuild will be used as the transpiler.

# Dev instructions

1. Open 2 terminals
1. in the first terminal run `npm run watch` => now nodemon will watch for changes in .ts files in your src directory and esbuild will transpile your code into .js.
1. in the second terminal run `npm run dev` => this will start a live-server, where your changes will immediately be reflected.

# Release instructions

1. Run `npm run build`. This will create all necessary files.
1. Run `npm publish`. This will now release your package in the npm registry.
