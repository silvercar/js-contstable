# JS Constable <!-- omit in toc -->

> Javascript/Typescript rules to ~~code~~ live by

![JS Constable logo](./docs/jsconstable.jpg)

## Table of Contents <!-- omit in toc -->
- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
  - [React](#react)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

## Background
The goal of this project is to not only get clean code, but also a more uniformly-formatted codebase to help devs more easily move between projects, especially in a siloed multi-team product development department.

These linting rules are largely derived from [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) with some minor modifications mostly related to strictness (such as warning instead of errors) for the sake of development speed. Much of the linting rules are covered in-depth in in the Airbnb Style Guide.

## Installation
Installation *will* be as easy as `npm i` once this module is published to NPM.

`npm install @silvercar/js-constable --save-dev`

## Usage
This is intended to serve as a general guideline for ESLint throughout Silvercar projects wherever JS/TS is concerned. If you need to change linting rules, go ahead, but please consider contributing it back to this repo so that other projects may benefit.

You probably want to setup your project for easy linting in your `package.json` (assuming code to lint is inside a `src/` folder):

```json
"scripts": {
  "lint": "eslint src/**/*.js src/**/*.jsx src/**/*.ts src/**/*.tsx"
},
```

You should now be able to easily lint your project manually via `npm run lint`.

Most IDEs should automatically pick up an `.eslintrc` and begin to automatically lint your code on-save or similar, but note that sometimes additional IDE-specific configuration might be needed such as [this example](https://create-react-app.dev/docs/setting-up-your-editor/).

### React

Add to `.eslintrc` for Typescript:

```json
{
  "extends": "./node_modules/@silvercar/js-constable/react-ts"
}
```

---

## FAQ

- **But but but, TSLint?!**
  - ESLint can do Typescript too
  - ESLint is more performant than TSLint
  - Palantir (creator/lead maintainer of TSLint) [is deprecating TSLint in favor of moving towards ESLint](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- **Will Markdown code blocks also be linted?**
  - Yes, only if you use `js`, `javascript`, `jsx`, or `node` in your fenced code blocks
  - This will be linted:
    ````markdown
    ```js
    const myFirstAddend = 1;
    const mySecondAddend = 2;

    const mySum = myFirstAddend + mySecondAddend;
    console.log(mySum));
    ```
    ````
  - This can be prevented by using `<!-- eslint-skip -->` above those same code blocks


## Support

Reach out at one of the following places:

---

## License

- **[ISC](https://choosealicense.com/licenses/isc/)**
- Copyright 2019 © [Silvercar](https://silvercar.com).