import React from 'react'
import { useState } from 'react'

const AboutTile = ({ name, description }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isText, setIsText] = useState("View Bio");

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (isText == "View Bio") {
            setIsText("Hide Bio");
        } else {
            setIsText("View Bio");
        }
    }

    return (
        <div className='py-4'>
            <div className='flex flex-col'>
                <h2 className='text-4xl sm:text-3xl text-primary sm:text-center'>{name}</h2>
                <p className='text-2xl sm:text-xl py-2 text-secondary sm:text-center'>Co-Founder</p>
                <button className={`hidden bg-primary text-light font-semibold sm:flex sm:mx-auto sm:my-2 border-primary border-2 px-4 py-2 rounded-full`} onClick={handleClick}>{isText}</button>
                <p className={`flex font-semibold text-xl pt-2 sm:text-center ${isOpen ? 'sm:flex' : 'sm:hidden'}`}>{description}</p>
            </div>
        </div>
    )
}

export default AboutTile