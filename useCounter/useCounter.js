import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    if(counter === 0){
        setCounter(30);
    } else if(counter > 30){
        setCounter(initialState)
    }

    const decrement = () => setCounter(counter - 1);
    const increment = () => setCounter(counter + 1);
    const reset = () => setCounter(initialState);

    return ({
        counter,
        increment,
        decrement,
        reset
    })
}
