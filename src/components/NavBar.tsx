import { useState, useEffect } from 'react';
import { navLinks } from "../constants/constants";
import dark_logo from '../aseets/dark_logo.svg'
import light_logo from '../aseets/light_logo.svg'
import ThemeSwitcher from './ThemeSwitcher';
// custom hook for setting theme and keep it in local storage in case if website revisited
import useLocalStorage from "../hooks/useLocalStorage";

const NavBar = () => {

    const [open, setOpen] = useState();
    const defaultTheme = window.matchMedia("(prefers-color-scheme : dark)");
    const [theme, setTheme] = useLocalStorage('dev-portfolio.scheme', defaultTheme ? 'dark' : 'light');
    const darkLogo = <img src={dark_logo} alt='vr dark theme logo' className='w-[3.5vw]' />;
    const lightLogo = <img src={light_logo} alt='vr light theme logo' className='w-[3.5vw]' />;

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            {theme === 'dark' ? darkLogo : lightLogo}
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className={`font-poppins ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>{link.title}</li>
                ))}
            </ul>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </nav>
    )
}

export default NavBar