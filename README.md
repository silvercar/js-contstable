# JS Constable <!-- omit in toc -->

> Javascript/Typescript rules to ~~code~~ live by

![JS Constable logo](https://i.imgur.com/lJ4lgLD.png)

## Table of Contents <!-- omit in toc -->
- [Installation](#installation)
- [Usage](#usage)
  - [Node 4.x+](#node-4x)
  - [React](#react)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

## Installation


## Usage

### Node 4.x+

### React

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