# Custom hooks

This repository contains some custom hooks for personal use and for those who may need them.

## Form 

Located in `useForm.js`, it's a basic form that receives an argument for an initial state, if it does not receive arguments, the initial state will be an empty object. Returns an array with values, and two functions: `handleInputChange` and `reset.`

- **handleInputChange**: execute the setValues ​​function to change the state ​​of the form, it receives a target object as an argument.

- **reset**: reset the form to its original state.


## useFetch

Located in `useFetch.js`, receive a url as an argument. The initial state is an object with the following properties: `{data: null, loading: true, error: null}`. Returns a object with the new data or with an error if there was a problem.

