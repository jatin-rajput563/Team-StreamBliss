import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <h2 className={`font-semibold text-white text-[42px] leading-[130%] text-center ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading