import React, { createContext, useState } from 'react';
import ContextAPIPractice from './Components/ContextAPIPractice';
import CompA from './Components/CompA';
import CompB from './Components/CompB';


export const mycontext=createContext('');

const App = () => {

    

    const [ContextValue, SetContextValue]=useState(0);
    return (
        <>
        <h1>App Component</h1>
        <p>Value: {ContextValue}</p>

        <mycontext.Provider value={[ContextValue,SetContextValue]}>
            <ContextAPIPractice />
            <CompA />
            <CompB />

        </mycontext.Provider>
        
        </>
    );
};

export default App;