import React from 'react'

const CustomButton = ({ btnClass, btnIcon, btnText, onClick }) => {
    return (
        <button onClick={onClick} className={`font-semibold whitespace-nowrap cursor-pointer text-lg leading-[160%] text-[#B3B3B3] rounded-[65px] border transition-all duration-300 ease-in-out hover:border-transparent hover:text-white hover:bg-gradient-to-b from-[#B851E0] to-[#EB489B] ${btnClass}`}>
            {btnIcon} {btnText}
        </button>
    )
}

export default CustomButton