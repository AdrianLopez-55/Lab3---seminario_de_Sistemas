import { useState } from 'react'

export const useWord = (word) => {
    const list = ["breaking bad", "rojo", "marinero", "zorro", "cristiano", "bolivia", "computadora", "hogar"];
    word = list[Math.floor(Math.random() * list.length)];
    const listLetters = word.split("").map((item, index) => {
        item = item.toUpperCase();
        item = {letter: item, status: false, id: "letter_" + index };
        return item;
    });
    const [listWord, setListWord] = useState(listLetters);
    const ifContains = (letter) => {
        const newlistWord = listWord.map((item) => {
            if(item.letter === letter && item.status === false){
                item.status = true;
            }
            return item;
        });
        setListWord(newlistWord);
    };
    const isValid = (letter) => {
        for (let i = 0; i < listWord.length; i++){
            let item = listWord[i];
            if(item.letter === letter) {
                return true;
            }
            let newlistWord1 = listWord.filter(state => state.status === true);
            let newlistWord2 = listWord.filter(item => item.letter !== "");
            if(newlistWord1.length === newlistWord2.length){
                if(!alert("CONGRATULATIONS")){
                    window.location.reload();
                }
                break;  
            };
        }
        return false;
    };
    return [listWord, setListWord, ifContains, isValid];
}