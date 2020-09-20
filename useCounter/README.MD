# useCounter

Example of use:
```
const { counter, increment, decrement, reset } = useCounter(10);
```

`useCounter()` // receives a value as initial state, if it does not receive arguments the initial state will be 1. Returns an object with the  counter, and three methods: increment, decrement and reset.

- **increment**: call the setCounter to change the state and  increment the counter + 1.

- **decrement**: call the setCounter to change the state and  decrement the counter - 1.

- **reset**: reset the counter to its original state.