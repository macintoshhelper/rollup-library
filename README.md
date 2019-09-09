# rollup-template
Rollup templates (React, etc)

## Get Started

### Installation

```sh
npm install rollup-library
```

### Usage

In your projects `rollup.config.js`, use:
```js
import makeConfig from 'rollup-library/react';

export default makeConfig({ input: 'src/main.js', name: 'MyProject' });
```
