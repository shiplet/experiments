# Experiments

To run:

```
$ npm install
$ npm test
```

## Array Dupe Comparisons

This is meant to show the performance differences between three methods of deepcopying arrays:

- `Array.prototype.slice`
- `Array.from`
- `Object.assign`

Each test iterates over a function that uses one of the three methods to deepcopy a trivially sized array, and pushes the current iteration count to the end of the new array. The new array is recreated for every iteration.

Iteration count is set in `tests/arrayDupeComparison.test.js`, and the default value is `1000000` (one million).
