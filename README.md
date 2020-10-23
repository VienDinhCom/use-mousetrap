# useMousetrap

A simple Mousetrap hook for handling keyboard shortcuts in React.

## Installation

```
yarn add use-mousetrap
```

```
npm install --save use-mousetrap
```

## Usage

```ts
import { useMousetrap } from 'use-mousetrap';

useMousetrap('ctrl+enter', () => {
  console.log('Squeek! Squeek!');
});
```

For more details, you can read the [Mousetrap](https://craig.is/killing/mice) documentation.
