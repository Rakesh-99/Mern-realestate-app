import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <header className='w-full bg-slate-300 shadow-md py-2'>

                <div className="flex justify-between items-center w-10/12 mx-auto h-10">
                    <div className="logo">
                        <h1 className='font-bold sm:text-2xl text-xl'>
                            <span className='text-slate-600'>Real</span>
                            <span className='text-slate-700'>Estate</span>
                        </h1>
                    </div>

                    <form action="" className='flex items-center border bg-gray-200 border-slate-500 rounded-md px-2'>
                        <input type="text" placeholder='Search...' className='rounded-md px-4  w-60 outline-none  bg-gray-200 py-2' />
                        <BiSearchAlt className='text-xl text-slate-600' />
                    </form>

                    <div className="list flex space-x-20">
                        <Link to={'/'} className='hidden sm:block hover:underline active:text-gray-500'>Home</Link>
                        <Link to={'/about'} className='hidden sm:block hover:underline active:text-gray-500'>About</Link>
                        <Link to={'/signin'} className='hover:underline active:text-gray-500'>SignIn</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;
