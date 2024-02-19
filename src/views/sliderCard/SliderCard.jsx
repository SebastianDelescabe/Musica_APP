import React from 'react';
import './SliderCard.css'

const SlideCard = ({ image }) => {

    return (
        <div
            className='slideCard'>
            <img src={image} alt="" />
        </div>
    )
}

export default SlideCard