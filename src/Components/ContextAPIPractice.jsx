import React, { useContext } from 'react';
import { mycontext } from '../App';
const ContextAPIPractice = () => {

    const[ContextValue,SetContextValue]=useContext(mycontext)
    const handleSubmit=()=>{
        SetContextValue(val=>val+1)
    }

    return (

        
        <>
        <h2>Context API Practice</h2>
        <button onClick={handleSubmit}>Add{ContextValue}</button>
        
        </>
    );
};

export default ContextAPIPractice;