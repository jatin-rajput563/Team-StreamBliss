import React from 'react'

const CustomButton = ({ btnClass, btnText, onClick }) => {
    return (
        <button onClick={onClick} className={`font-semibold cursor-pointer text-lg leading-[160%] text-[#B3B3B3] rounded-[65px] border transition-all duration-200 ease-linear hover:border-transparent hover:text-white hover:bg-gradient-to-b from-[#B851E0] to-[#EB489B] ${btnClass}`}>
            {btnText}
        </button>
    )
}

export default CustomButton