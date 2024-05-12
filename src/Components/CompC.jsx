import React, { useContext }from 'react';
import { mycontext } from '../App';

const CompC = () => {
    const[ContextValue,SetContextValue]=useContext(mycontext)
    const handleEvent=()=>{
        SetContextValue(val=>val*0)
    };
    return (
        <>
        <p>Component C</p>
        <button onClick={handleEvent}>Reset{ContextValue}</button>
        </>
    );
};

export default CompC;