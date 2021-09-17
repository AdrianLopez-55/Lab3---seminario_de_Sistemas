import React from 'react';
import { useKeyBoard } from '../hooks/useKeyBoard';
import { KeyComponentOne } from './KeyComponentOne';

export const KeyBoardComponent = ({handlerKeyPress}) => {
    const [KeyBoard, setKeyBoard] = useKeyBoard();
   const handlerKey = (key) => {
       const newKeyBoard = KeyBoard.map((item) => {
           const {key: keyList} = item;
           if(key === keyList) {
               item.status = true;
           }
           return item;
       });
       setKeyBoard(newKeyBoard);
       handlerKeyPress(key);
   }
    return (
    <div className="flex-container">{KeyBoard.map((item) => (
            <KeyComponentOne key={item.id} letter={item.key} handlerKey={handlerKey} status={item.status}/>
    ))}
    </div>
    );
};
