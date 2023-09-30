import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';



const Home = () => {

    const data = useContext(MyContext);

    return (

        <>
            <h1>Home</h1>
        </>
    )
}

export default Home
