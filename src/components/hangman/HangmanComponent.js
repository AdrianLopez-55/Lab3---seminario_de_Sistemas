import React from 'react'
import { DrawComponent } from './components/DrawComponent';
import { KeyBoardComponent } from './components/KeyBoardComponent';
import { WordComponent } from './components/WordComponent';
import { useCounter } from './hooks/useCounter';
import { useWord } from './hooks/useWord';
import "./styles.css";
export const HangmanComponent = () => {
    const [listWord,  , ifContains, isValid] = useWord("red");
    //useEffect(() => {}, [letter]);
    //const [letter, setLetter] = useState("");
    const [counter, , decrementCounter] = useCounter(6, { max: 6, min: 0 });
    const handlerKeyPress = (key) => {
        ifContains(key);
        if (!isValid(key)){
            decrementCounter();
        }
     };
    return (
        <div>
            <h1>Hangman</h1>
            <hr/>
            
            <DrawComponent counter={counter}/>
            <WordComponent listWord={listWord}/>
            <KeyBoardComponent handlerKeyPress={handlerKeyPress}/>

        </div>
    )
}
