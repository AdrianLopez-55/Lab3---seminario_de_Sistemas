import { useState } from 'react'

export const useCounter = (initCounter, {max, min}) => {
    const [counter, setCounter] = useState(initCounter);
    const incrementCounter = (step = 1) => {
        if(counter < max) {
            setCounter(counter + step);
        }
    };
    const decrementCounter = (step = 1) => {
        if(counter > min) {
            setCounter(counter - step);
        }
        if(counter === 1) {
            alert("GAME OVER");
            window.location.reload();
        }
    };
    const resetCounter = () => {
        setCounter(initCounter);
    };
    return [counter, incrementCounter, decrementCounter, resetCounter];
}
