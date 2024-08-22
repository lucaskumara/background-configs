# background-configs
 
Improvements to the background config creation process with Typescript at its core.

- [x] Webpack

### Webpack

Since the background configs can only use a single script file. A bundler is used to maintain the ability for developers to write clean/organized code while still bundling down to a single JavaScript file for upload

To create the bundled file, run `npm run build:scripts`