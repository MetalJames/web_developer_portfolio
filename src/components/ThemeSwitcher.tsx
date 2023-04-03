import { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

type ThemeSwitcherProps = {
    theme: any,
    setTheme: any,
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const { theme, setTheme } = props;

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme]);

    return (
        <aside>
            <button
                className='btn'
                aria-label={`Change theme to ${
                theme === 'light' ? 'dark' : 'light'
                } mode`}
                role='switch'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
        </aside>
    );
};

export default ThemeSwitcher;
