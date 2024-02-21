import React from 'react';
import LatestRecipies from './LatestRecipies';
import MostPopular from './MostPopular';
import LoadMore from './LoadMore';
import { Link } from 'react-router-dom';

const Wrapper = () => {
    return (
        <main className='md:col-span-5 p-5'>
            <div className='flex justify-center md:justify-end space-x-3'>
                <Link to="/" className='btn text-primary border-primary  md:border-2 hover:bg-primary
                 hover:text-white mb-3 md:mb-0 transition ease-in-out duration-300'>Log in</Link>
                <Link to="/" className='btn text-primary border-primary  md:border-2 hover:bg-primary
                 hover:text-white mb-3 md:mb-0 transition ease-in-out duration-300'>Sign up</Link>
            </div>

            <header>
                <h2 className='text-gray-700 text-6xl font-semibold'>Recipies</h2>
                <h3 className='text-2xl font-semibold'>For Customers</h3>
            </header>

            <div>
                <LatestRecipies />
                <MostPopular />
                <LoadMore />
            </div>
        </main>
    )
}

export default Wrapper;