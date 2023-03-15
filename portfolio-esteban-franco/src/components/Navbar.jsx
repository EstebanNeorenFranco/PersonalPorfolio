import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(null);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='sticky top-0 flex justify-between items-center h-24 max-w-screen mx-auto px-4 md:px-20'>
        <h1 className='hidden sm:flex cursor-pointer font-mono w-full font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>EstebanFranco.dev</h1>
        <h2 className='flex sm:hidden cursor-pointer font-mono w-full font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>EF.dev</h2>
       
        <ul className='hidden md:flex'>
          <li className='p-4 cursor-pointer'>Bio</li>
          <li className='p-4 cursor-pointer'>Projects</li>
          <li className='p-4 cursor-pointer'>Contact</li>
        </ul>
      {/* BOTON DARK-MODE */}
      <button onClick={handleThemeSwitch} className="pl-2 pr-4">
                        <DarkModeIcon className="hover:fill-blue-600 dark:fill-white dark:hover:fill-blue-600 transition-all duration-75 hover:transition-all hover:duration-700"/>
                    </button>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <CloseIcon size={20} className="cursor-pointer hover:fill-gray-400 dark:fill-white dark:hover:fill-gray-400 transition-all duration-75 hover:transition-all hover:duration-700" /> : <MenuIcon size={20} className="cursor-pointer hover:fill-gray-400 dark:fill-white dark:hover:fill-gray-400 transition-all duration-75 hover:transition-all hover:duration-700" />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 backdrop-blur-xl ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h2 className='font-mono w-full pt-10 font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 pl-8'>EstebanFranco.dev</h2>
          <li className='p-4 cursor-pointer pt-10 border-b border-gray-600'>Home</li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>Bio</li>
          <li className='p-4 cursor-pointer border-b border-gray-600'>Projects</li>
          <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;