# generator-es6-npm-module

This generator creates empty npm module with integrated Travis and Coveralls services. It uses webpack and supports compilation of .coffee and ES6 javascript.

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
  |-- test
  |  |-- unit
  |  |  |-- index.test.js
  |  |-- mocha.opts
  |-- .babelrc
  |-- .editorconfig
  |-- .gitignore
  |-- .npmignore
  |-- .travis.yml
  |-- package.json
  |-- webpack.config.js
  |-- LICENSE
  |-- README.md
```
