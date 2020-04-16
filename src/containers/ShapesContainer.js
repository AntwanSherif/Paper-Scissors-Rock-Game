import React from 'react';
import Triangle from '../assets/bg-triangle.svg';
import Control from '../components/Control';

export default function ShapesContainer({ className: additionalClassNames = '' }) {
    return (
        <div className={`flex flex-1 items-center ${additionalClassNames}`}>
            <div className='relative'>
                <Control type='paper' className='bg-red absolute -top-24 -left-20' />
                <Control type='scissors' className='bg-red absolute -top-24 -right-20' />
                <Control type='rock' className='bg-red absolute top-9 right-3.5' />

                <img src={Triangle} alt='triangle' />
            </div>
        </div>
    )
}
