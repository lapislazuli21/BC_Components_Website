import React from 'react'
import { useState } from 'react'

const AboutTile = ({ name, description }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='py-4'>
            <div className='flex flex-col'>
                <h2 className='text-4xl sm:text-3xl text-primary sm:text-center'>{name}</h2>
                <p className='text-2xl sm:text-xl py-2 text-secondary sm:text-center'>Co-Founder</p>
                <button className='hidden bg-primary text-light sm:flex sm:mx-auto sm:mb-2 border-primary border-2 p-4 rounded-xl sm:rounded-full' onClick={handleClick}>View Bio</button>
                <p className={`flex font-semibold text-lg pt-2 sm:text-center ${isOpen ? 'sm:flex' : 'sm:hidden'}`}>{description}</p>
            </div>
        </div>
    )
}

export default AboutTile