import React from 'react'

const AboutTile = ({ name }) => {
    return (
        <div className='py-4'>
            <div className='flex flex-col'>
                <h2 className='text-5xl sm:text-3xl text-primary sm:text-center'>{name}</h2>
                <p className='text-2xl sm:text-xl py-2 text-secondary sm:text-center'>Co-Founder</p>
            </div>
        </div>
    )
}

export default AboutTile