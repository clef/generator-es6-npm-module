"use strict";

const Base = require('yeoman-generator').Base;
const path = require('path');
const yosay = require('yosay');

const QUESTIONS = [{
  type: 'input',
  name: 'module:name',
  message: 'Module name'
}, {
  type: 'input',
  name: 'module:description',
  message: 'Module description'
}, {
  type: 'input',
  name: 'module:author:nickname',
  message: 'Your GitHub username',
  store: true
}, {
  type: 'input',
  name: 'module:author:fullName',
  message: 'Your full name',
  store: true
}, {
  type: 'input',
  name: 'module:scope',
  message: 'The package scope',
  default: 'clef'
}, {
  type: 'list',
  name: 'module:access',
  message: 'Would you like this module to be public or private?',
  default: 'private',
  choices: [
    'public',
    'private'
  ]
}, {
  type: 'input',
  name: 'module:github',
  message: 'The username/name Github combo where the module is published.',
  default: (answers) => {
    if (answers['module:scope']) {
      return `${answers['module:scope']}/${answers['module:name']}`
    } else {
      return `${answers['module:username']}/${answers['module:name']}`
    }
  }
}, {
  type: 'confirm',
  name: 'module:coffee',
  message: 'Would you like to support CoffeeScript in this module?',
  default: false
}, {
  type: 'confirm',
  name: 'module:react',
  message: 'Is this a React component?',
  default: false
}, {
  type: 'list',
  name: 'module:license',
  message: 'Choose a license',
  default: 'MIT',
  choices: [
    'Apache-2.0',
    'Artistic-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'EPL-1.0',
    'GPL-2.0',
    'GPL-3.0',
    'ISC',
    'LGPL-2.1',
    'LGPL-3.0',
    'MIT',
    'MPL-2.0',
    'Unlicense'
  ]
}];

/**
 * Fetch license text from choosealicense.com
 * @param {String} license License ID
 * @param {Function} cb Callback function with license content as argument
 */
function fetchLicense(license, cb) {
  const username = 'github';
  const repository = 'choosealicense.com';
  const branch = 'gh-pages';
  const cacheRoot = this.cacheRoot();
  const sourceRoot = this.sourceRoot();

  this.remote(username, repository, branch, (error, remote) => {
    this.sourceRoot(path.join(cacheRoot, username, repository, branch));

    const content = this
      .read(['_licenses/', license.toLowerCase(), '.txt'].join(''))
      .replace(/-+[\d\D]*?-+\n\n/, '')
      .replace(/\[year\]/g, new Date().getFullYear())
      .replace(/\[fullname\]/g, this.answers['module:author:fullName']);

    this.sourceRoot(sourceRoot);

    cb(content);
  });
}

module.exports = class AppGenerator extends Base {
  prompting() {
    const done = this.async();

    this.log(yosay('Welcome to the extraordinary ES6 npm module generator!'));
    this.prompt(QUESTIONS, answers => {
      this.answers = answers;
      this.answers['module:scoped-name'] = this.answers['module:scoped-name'];
      if (this.answers['module:scope']) {
        this.answers['module:scoped-name'] = '@' + this.answers['module:scope'] + '/' + this.answers['module:name']
      }

      fetchLicense.call(this, this.answers['module:license'], content => {
        this.write('LICENSE', content);
        done();
      });
    });
  }

  writing() {
    this.directory('src', 'src');

    this.directory('spec', 'spec');
    this.copy('base.spec.js', 'spec/' + this.answers['module:name'] + '.spec.js');
    this.copy('tests.bundle.js', 'tests.bundle.js');
    this.copy('karma.conf.js', 'karma.conf.js');

    this.copy('babelrc', '.babelrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('npmignore', '.npmignore');
    this.copy('package.json', 'package.json');
    this.copy('README.md', 'README.md');
    this.copy('travis.yml', '.travis.yml');
    this.copy('webpack.config.js', 'webpack.config.js');
  }

  install() {
    this.npmInstall();
  }
};
