import React, { useState, useEffect } from 'react';
import CustomButton from '../components/common/CustomButton'
import { HEADER_LIST } from '../utils/helper';
import { ProfileIcon } from '../utils/Icons';
import headerLogo from '../assets/images/png/header-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden", !menuOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const linkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className='px-3'>
        <nav className='max-w-[1140px] mx-auto py-4.5 md:py-[21.5px]'>
          <div className="flex justify-between items-center">
            <a href="/"><img className='pointer-events-none' src={headerLogo} alt="nav-logo" /></a>
            <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
              <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
              <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
              <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
            </div>
            <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-7 lg:gap-[35px] mb-0 ${menuOpen ? "show-navbar" : ""}`}>
              {HEADER_LIST.map((item, index) => (
                <li key={index}><a onClick={linkClick} className='text-white header-link leading-[160%] transition-all duration-200 ease-linear' href={item.link}>{item.title}</a></li>
              ))}
              <li className='lg:hidden'><CustomButton onClick={linkClick} btnClass={"px-[55px] py-3.5"} btnText={"Dashboard"} /></li>
              <li className='lg:hidden'><a onClick={linkClick} className='border-[#B3B3B4] border size-[57px] rounded-full flex items-center justify-center' href="/"><ProfileIcon /></a></li>
            </ul>
            <ul className='max-lg:hidden flex gap-4 items-center justify-center'>
              <li><CustomButton onClick={linkClick} btnClass={"px-[54.2px] py-[13.2px]"} btnText={"Dashboard"} /></li>
              <li><a className='border-[#B3B3B4] border size-[57px] rounded-full flex items-center justify-center hover:bg-gradient-to-b from-[#B851E0] to-[#EB489B] hover:border-transparent transition-all duration-200 ease-linear' href="/"><ProfileIcon /></a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border border-[#FFFFFF1F]"></div>
    </>
  );
};

export default Header;