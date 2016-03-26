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
