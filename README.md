# background-configs
 
Improvements to the background config creation process with Typescript at its core.

- [x] Webpack

### Webpack

Since the background configs can only use a single script file. A bundler is used to maintain the ability for developers to write clean/organized code while still bundling down to a single JavaScript file for upload

To create the bundled file, run `npm run build:scripts`

### ESLint

Since we have multiple developers working on configs, ESLint is used to maintain some standards with regards to code quality (reducing bugs and improving code quality/consistency across configs) as well as provide developers with an additional tool to help catch bugs before running the script in their browser or in the config

For VSCode developers, it is recommended to use the ESLint extension to avoid needing to run the linter manually

### Jest

Incorporating unit tests can help reduce the amount of time testing each individual use case with the bundled code in the browser. It also can help avoid blocking issues when testing on the website due to excessive requests to specific endpoints. Mocking can also be used to test how the functions would react to endpoints with unique error responses, missing data, etc.