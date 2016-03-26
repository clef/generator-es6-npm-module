# <%= answers['module:name'] %>

![Build Status](https://img.shields.io/travis/<%= answers['module:github'] %>.svg)
![Downloads](https://img.shields.io/npm/dm/<%= answers['module:scoped-name'] %>.svg)
![Downloads](https://img.shields.io/npm/dt/<%= answers['module:scoped-name'] %>.svg)
![npm version](https://img.shields.io/npm/v/<%= answers['module:scoped-name'] %>.svg)
![dependencies](https://img.shields.io/david/<%= answers['module:github'] %>.svg)
![dev dependencies](https://img.shields.io/david/dev/<%= answers['module:github'] %>.svg)
![License](https://img.shields.io/github/license/<%= answers['module:github'] %>.svg)

<%= answers['module:description'] %>

## Installation

Install it via npm:

```shell
npm install <%= answers['module:scoped-name'] %>
```

## Usage

```javascript
import <%= answers['module:name'] %> from '<%= answers['module:scoped-name'] %>';

/*
*
* Add more usage information here.
* Good code is bad unless it's documented.
*
*/
```

## Development

To start development, run:

```shell
git clone git@github.com:<%= answers['module:github'] %>.git <%= answers['module:name'] %>
cd <%= answers['module:name'] %>
npm install
npm run test
```


## License

<%= answers['module:license'] %>
