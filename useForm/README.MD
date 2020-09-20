# useForm

Example of use:
```
const initialForm = {
    name: '',
    age: 0,
    email: ''
};

const [ formValues, handleInputChanges, reset ] = useForm( intialForm );
```
It's a basic form that receives an argument for an initial state, if it does not receive arguments, the initial state will be an empty object. Returns an array with values, and two functions: `handleInputChange` and `reset.`

- **handleInputChange**: execute the setValues ​​function to change the state ​​of the form, it receives a target object as an argument.

- **reset**: reset the form to its original state.