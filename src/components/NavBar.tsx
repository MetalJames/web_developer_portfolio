import { useState } from 'react';
import { navLinks } from "../constants/constants";
import dark_logo from '../aseets/dark_logo.svg'
import light_logo from '../aseets/light_logo.svg'
import ThemeSwitcher from './ThemeSwitcher';
import { AiFillGithub, AiFillLinkedin, AiOutlineCloseCircle } from "react-icons/ai";
// custom hook for setting theme and keep it in local storage in case if website revisited
import useLocalStorage from "../hooks/useLocalStorage";

const NavBar = () => {

    // const [isCurrent, setIsCurrent] = useState('projects');
    // ${isCurrent === link.id ? 'text-[#29caba]' : 'text-current'}
    const [open, setOpen] = useState(false);
    const top = () => window.scrollTo(0, 0);
    const defaultTheme = window.matchMedia('(prefers-color-scheme : dark)');
    const [theme, setTheme] = useLocalStorage('dev-portfolio.scheme', defaultTheme ? 'dark' : 'light');
    const darkLogo = <img src={dark_logo} alt='vr dark theme logo' className='w-[3rem] cursor-pointer' onClick={() => top()}/>;
    const lightLogo = <img src={light_logo} alt='vr light theme logo' className='w-[3rem] cursor-pointer' onClick={() => top()}/>;

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            {theme === 'dark' ? darkLogo : lightLogo}
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className={`font-poppins 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                        
                        `}
                    >
                        <a href={`#${link.id}`}>
                        {/* <a href={`#${link.id}`} onClick={() => setIsCurrent(link.id)}> */}
                            <p className='navbarUnderline'>{link.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <p className='w-full text-right pr-4 sm:hidden block' onClick={() => setOpen((prev) => (!prev))}>MENU</p>
            <div className={`${open ? 'flex' : 'hidden'}`}>
                <div id='openedMenu' className={`w-[100vw] h-[100vh] absolute top-0 left-0 flex flex-col items-end overflow-hidden ${theme === 'dark' ? 'bg-[hsl(var(--bg--dark))]' : 'bg-[hsl(var(--bg--light))]'}`}>
                    <div className='flex justify-between items-center w-full p-6'>
                        {theme === 'dark' ? darkLogo : lightLogo}
                        <h4 className={`${open ? 'flex' : 'hidden'} text-black`} onClick={() => setOpen((prev) => (!prev))}>
                            <AiOutlineCloseCircle size='2.5rem' color={theme === 'dark' ? '#29caba' : 'black'} />
                        </h4>
                    </div>
                    <div className='flex flex-wrap w-full h-[60%]'>
                        {navLinks.map(link => (
                            <div key={link.id} className={`
                            w-[50%] h-[50%] flex justify-center items-center ${theme === 'dark' ? 'text-[#29caba]' : 'text-black'}
                            ${link.id === 'projects' && 'border-r-2 border-b-2'}
                            ${link.id === 'skills' && 'border-l-2 border-b-2'}
                            ${link.id === 'aboutme' && 'border-r-2 border-t-2'}
                            ${link.id === 'contactme' && 'border-l-2 border-t-2'}
                            `}
                            >
                                <a href={`#${link.id}`} className='w-full h-full flex justify-center items-center' onClick={() => setOpen((prev) => (!prev))}>
                                    <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>{link.title}</h4>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between items-center w-full p-6'>
                        <a href='https://github.com/MetalJames' target='_blank'><AiFillGithub size='3rem' color={theme === 'dark' ? '#29caba' : 'black'}/></a>
                        <a href='https://www.linkedin.com/in/volodymyr-ruzhak-326585138/' target='_blank'><AiFillLinkedin size='3rem' color={theme === 'dark' ? '#29caba' : 'black'}/></a>
                    </div>
                    <div className='flex flex-col items-center justify-center text-black w-full'>
                        <h4 className={`font-poppins font-light text-[16px] leading-[30px] ${theme === 'dark' ? 'text-[#29caba]' : 'text-black'}`}>All Rights Reserved</h4>
                        <h4 className={`font-poppins font-light text-[16px] leading-[30px] ${theme === 'dark' ? 'text-[#29caba]' : 'text-black'}`}>Copyright © 2024 Volodymyr Ruzhak</h4>
                    </div>
                </div>
            </div>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </nav>
    )
}

export default NavBar