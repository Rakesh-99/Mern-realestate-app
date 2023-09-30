import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import About from './pages/About/About';
import NoPage from './pages/NoPage/NoPage';
import MyState from './context/MyState';
import Navbar from './components/Navbar/Navbar';



const App = () => {

    return (
        <>
            <MyState>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/*' element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            </MyState>
        </>
    )
}

export default App
