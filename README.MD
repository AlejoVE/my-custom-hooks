# Custom hooks

This repository contains some custom hooks for personal use and for those who may need them.

## Form 

Located in `useForm.js`, it's a basic form that receives an argument for an initial state, if it does not receive arguments, the initial state will be an empty object. Returns an array with values, and two functions: `handleInputChange` and `reset.`

- **handleInputChange**: execute the setValues ​​function to change the state ​​of the form, it receives a target object as an argument.

- **reset**: reset the form to its original state.

