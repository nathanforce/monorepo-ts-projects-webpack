Reproduction repo for https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/463

Building the app:

`npx webpack-dev-server --mode=development --config ./apps/alpha/webpack.config.js`

Structure:

#### Apps (`/apps`)

apps/alpha is an app. There could be others like it. They each have their own `webpack.config.js` and they may consume packages from `/packages`.

#### Packages\_ (`/packages`)

Packages are the dependencies of apps. A package may depend on another package. Each package is a standalone Typescript project and has its own `tsconfig.json`
