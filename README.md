# background-configs
 
Improvements to the background config creation process with Typescript at its core.

### Webpack

Since the background configs can only use a single script file. A bundler is used to maintain the ability for developers to write clean/organized code while still bundling down to a single JavaScript file for upload

To create the bundled file, run `npm run build:scripts`

### ESLint

Since we have multiple developers working on configs, ESLint is used to maintain some standards with regards to code quality (reducing bugs and improving code quality/consistency across configs) as well as provide developers with an additional tool to help catch bugs before running the script in their browser or in the config

For VSCode developers, it is recommended to use the ESLint extension to avoid needing to run the linter manually

### Jest

Incorporating unit tests can help reduce the amount of time testing each individual use case with the bundled code in the browser. It also can help avoid blocking issues when testing on the website due to excessive requests to specific endpoints. Mocking can also be used to test how the functions would react to endpoints with unique error responses, missing data, etc.

### Utilities

Some additional utilities are added to streamline the script creation process. 

- Logging is used for obvious reasons, but a custom logging class is used to track each type of log message. This allows for message_callback_body to easily send back all log messages without cluttering the script code with many lists of properly formatted messages and remembering to send them back

- Converters are created to simply handle the conversion of various data types to usable objects. One is created for start data which can handle null, string and object inputs. Another is created for collect orders which can handle null, string and boolean. A custom error is also thrown to allow for easier debugging

- Decorators were created to capture the return value of async functions to prevent lengthy message_callback_body(...) function calls and allow the function to simply return the object to send back. A decorator to apply converters also replaces the handleStartData and handleCollectOrders functions by ensuring the function is called with the correct or default values by converting them before the function is called