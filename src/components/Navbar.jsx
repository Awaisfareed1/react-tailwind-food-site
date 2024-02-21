import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className="md:col-span-1">
            <div className="md:flex md:justify-end">
                <nav className="bg-white md:h-[100vh] md:fixed md:w-[15%] text-right">
                    <div className=" md:mt-8">
                        <div className='flex justify-between items-center my-4 md:block'>
                            <h1 className="font-bold uppercase mx-8 text-3xl text-primary flex justify-end hover:text-purple-800 cursor-pointer">
                                <Link to="/">Food</Link>
                            </h1>
                            <div className='px-4 cursor-pointer md:hidden' onClick={() => { setOpenNav(!openNav) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ul className={"md:block" + (openNav ? "md:mt-5 md:flex" : " hidden")} id="list">
                        <li className="text-gray-900 font-bold my-2 md:px-2 lg:px-4 border-r-4 border-primary cursor-pointer"><Link to="/"><span className="md:mr-6">Home</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        </Link></li>
                        <li className="text-gray-900 my-2 md:px-2 lg:px-4 border-r-4 border-white hover:border-primary cursor-pointer"><Link to="/about"><span className="md:mr-6">About</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </Link></li>
                        <li className="text-gray-900 my-2 md:px-2 lg:px-4 border-r-4 border-white hover:border-primary cursor-pointer"><Link to="/"><span className="md:mr-4">Contact</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;