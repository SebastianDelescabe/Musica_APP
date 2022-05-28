import React, { useState } from 'react';
import './SlideCard.css'

const SlideCard = ({ album }) => {

    const [mouseIn, setMouseIn] = useState(false)
    const { image, name, release_date } = album

    return (
        <div
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
            className='slideCard'
        >
            <div className={mouseIn && 'slideCard__active'}>
                <img
                    src={image.url}
                    alt=""
                />
                {
                    mouseIn && (
                        <div className='slideCard__container'>
                            <div className='slideCard__containerText'>
                                <span className='slideCard__title'>{name.substring(0, 50)}</span>
                                <span className='slideCard__subtitle'>Publicado: {release_date}</span>
                            </div>
                            <div>
                                <button style={{ backgroundColor: '#E3513D' }}> - Remove album</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SlideCard