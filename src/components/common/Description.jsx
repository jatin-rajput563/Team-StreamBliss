import React from 'react'

const Description = ({ descriptionText, descriptionClass }) => {
    return (
        <p className={` leading-[160%] opacity-70 text-white text-lg ${descriptionClass}`}>{descriptionText}</p>
    )
}

export default Description