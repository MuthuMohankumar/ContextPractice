import React, { useContext } from 'react';
import { mycontext } from '../App';

const CompA = () => {
    const[ContextValue,SetContextValue]=useContext(mycontext)
    const handelSubmit=()=>{
        if(ContextValue>0)
            SetContextValue(val=>val-1)
    }

    return (
        <>
        <p>Component A</p>
        <button onClick={handelSubmit}>Sub{ContextValue}</button>
        </>
    );
};

export default CompA;