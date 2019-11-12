# JS Constable <!-- omit in toc -->

> Javascript/Typescript rules to ~~code~~ live by

![JS Constable logo](https://i.imgur.com/lJ4lgLD.png)

## Table of Contents <!-- omit in toc -->
- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
  - [Node 4.x+](#node-4x)
  - [React](#react)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

## Background
The goal of this project is to not only get clean code, but also a more uniformly-formatted codebase to help devs more easily move between projects, especially in a siloed multi-team product development department.

These linting rules are largely derived from [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) with some minor modifications mostly related to strictness (such as warning instead of errors) for the sake of development speed. Much of the linting rules are covered in-depth in in the Airbnb Style Guide.

## Installation
Drop `.eslintrc` into the base level of your project.

Note that, infrequently, additional setup might need to be done in your IDE to run, for example [ESLinting on save with TypeScript Create React App in VSCode](https://create-react-app.dev/docs/setting-up-your-editor/).

## Usage
This is intended to serve as a general guideline for ESLint throughout Silvercar projects wherever JS/TS is concerned. If you need to change linting rules, go ahead, but please consider contributing it back to this repo so that other projects may benefit.

The example apps aren't intended to serve as a boilerplate for new apps as they might have fallen out-of-date, but more as a PoC for working apps that also pass linting (yes, it *is* possible).

### Node 4.x+

Check out the `.eslintrc` examples for [typescript](ts/node/hapi/.eslintrc) and [javascript](js/node/hapi/.eslintrc), along with the example "Hello World" hapi projects that go along with them.

### React

Check out the `.eslintrc` examples for [typescript](ts/react/cra/.eslintrc) and [javascript](js/react/cra/.eslintrc), along with the example Create React App projects that go along with them.

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
    var myFirstAddend = 1;
    var mySecondAddend = 2;

    var mySum = myFirstAddend + mySecondAddend;
    console.log(mySum));
    ```
    ````
  - This can be prevented by using `<!-- eslint-skip -->` above those same code blocks


## Support

Reach out at one of the following places:

- Join the slack channel [`#linting`](https://silvercar.slack.com/app_redirect?channel=linting)

---

## License

- **[MIT](https://choosealicense.com/licenses/mit/)**
- Copyright 2019 © [Silvercar](https://silvercar.com).