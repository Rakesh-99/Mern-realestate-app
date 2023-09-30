import React from 'react';
import MyContext from './MyContext';




const MyState = ({ children }) => {



    return (

        <div>
            <MyContext.Provider>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default MyState
