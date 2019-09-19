# flow-adaptive-vue

SSR friendly vue plugin for [flow-adaptive.js](https://github.com/SashaSansay/flow-adaptive) module.

## What is flow-adaptive.js about?

It's about dynamic change of html element font-size for comfortable using of rem
unit of measurement. 

## Installation

`npm install flow-adaptive-vue`

## Usage

```javascript
import Vue from 'vue'
import FlowAdaptive from 'flow-adaptive-vue'

Vue.use(FlowAdaptive, {
  fontRatio: 1440 / 10,  // the best practice is to set fontRatio to base layout width / 10
  maxWidth: 1440,
  minWidth: 650,
  breakPoints: [
    {
      minWidth: 650,
      maxWidth: 900,
      fontRatio: 768 / 10,
    },
    {
      maxWidth: 649,
      fontRatio: 375 / 10,
    },
  ],
})


```

And then all you need is to set all sizes in rem units. For example: 

```scss
.foo {
  font-size: 1.6rem; // equal to 16px on 1440px, on 768px and on 375px screen width 
}
```
