# generator-es6-npm-module

This generator creates an npm-compatible module with support for ES6, Webpack (building), Mocha (testing), Chai (assertion), Karma (test running), and TravisCI (continuous integration).

Out of the box, you'll get green tests with coverage and helpful NPM scripts for versioning and publishing.

## Getting Started

```bash
npm install -g yo @clef/generator-es6-npm-module
mkdir my-project && cd my-project
yo @clef/es6-npm-module
```

Or you can create folder with your project and just copy\paste this code to terminal (you should be located under your project folder)

```bash
npm install -g yo @clef/generator-es6-npm-module && yo @clef/es6-npm-module
```

## Project structure

When project is generated you will get project with that structure:

```
|-- my-project
  |-- src
  |  |-- index.js
  |-- spec
  |  |-- my-project.spec.js
  |-- .babelrc
  |-- .editorconfig
  |-- .gitignore
  |-- .npmignore
  |-- .travis.yml
  |-- karma.conf.js
  |-- package.json
  |-- webpack.config.js
  |-- LICENSE
  |-- README.md
```

## Common questions

### How do I develop two packages at once?

_npm_ provides good tooling for developing many packages at once. You're likely in the following situation:

* You have `package-b` which depends on `package-b`
* You'd like to work on them at the same time

To achieve this, we will `npm link package-b` into the global space and then link it back into `package-a`. Follow these steps:

```shell
cd /path/to/package-b
npm link
cd /path/to/package-a
npm link package-b
```

You can read more about `npm link` [here](https://docs.npmjs.com/cli/link).

### When do I add to "dependencies" vs. a "peerDependencies"?

Because our build system uses both Webpack and Browserify, we can run into issues where dependencies are built into our distributed source twice. This is very bad. To address this, we use `peerDependencies` extensively.

* `peerDependencies` - any module that is shared by one or more of our components should be added to `peerDependencies`. If you add a module to `peerDependencies`, you should also add it to `devDependencies`, so that it will be installed for testing and development (`peerDependencies` are not installed by default in npm > 3).
* `dependencies` - any module that _only_ this component relies on should be added to `dependencies`.

This is a pain in the butt and we are working on a solution.

## Known issues

### Duplicate module import

This issue crops up in the following situation:

* We have two packages `package-a` and `package-b` which both depend on `react` (or another module)
* We `npm link package-a` into `package-b`
* We try build `package-a` with `browserify`

In this situation, `react` will be loaded twice in the `browserify` bundle. 

To fix this, follow the steps outlined [here](https://github.com/webpack/webpack/issues/966#issuecomment-95491120).

```shell
cd /path/to/project-b
cd node_modules/react
npm link
cd /path/to/project-a
npm link react
```

This issue only affects packages when thay are connected using `npm link`.
