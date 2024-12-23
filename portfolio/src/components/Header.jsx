import React from 'react';

const Header =() => {
    return (
        <header className='bg-base-100 shadow'>
            <div className='navbar container mx-auto'>
                <div className='flex-1'>
                    <a className='btn btn-ghost normal-case text-xl '>Coulby</a>
                </div>
                <div className='flex-none hidden lg:flex'>
                    <ul className='menu menu-horizontal flex gap-10 p-2'>
                        <li>
                            <a className='btn'>Home</a>
                        </li>
                        <li>
                            <a className='btn'>About</a>
                        </li>
                        <li>
                            <a className='btn'>Projects</a>
                        </li>
                        <li>
                            <a className='btn'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex-none lg:hidden'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-ghost btn-circle'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                            </svg>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                        <li>
                            <a className='btn'>Home</a>
                        </li>
                        <li>
                            <a className='btn'>About</a>
                        </li>
                        <li>
                            <a className='btn'>Projects</a>
                        </li>
                        <li>
                            <a className='btn'>Contact</a>
                        </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;