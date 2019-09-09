# rollup-template
Importable rollup templates: React, Node, etc.

API is not stable, this is an alpha release.

Please check the issues if you'd like to contribute code/ideas!

## Get Started

### Installation

```sh
npm install rollup-library
```

### Usage

In your projects `rollup.config.js`, use:
```js
import makeConfig from 'rollup-library';

export default makeConfig({ input: 'src/main.js', name: 'MyProject' });
```
