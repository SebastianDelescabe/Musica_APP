import React, { useContext, useState } from 'react';
import { Favorites } from '../../context/Favorites'
import './SlideCard.css'

const SlideCard = ({ album }) => {

    const { favorites, setFavorites } = useContext(Favorites)
    const [mouseIn, setMouseIn] = useState(false)
    const { image, name, release_date } = album

    const removeAlbum = () => {
        const filterFavorite = favorites.filter(favorite => favorite.id !== album.id)
        setFavorites(filterFavorite)
        localStorage.setItem('favorites', JSON.stringify(filterFavorite))
    }

    return (
        <div
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
            className={mouseIn ? 'slideCard__active' : 'slideCard'}
        >
            <img
                src={image.url}
                alt=""
            />
            {mouseIn && (
                <div className='slideCard__container'>
                    <div className='slideCard__containerText'>
                        <span className='slideCard__title'>{name.substring(0, 20)}</span>
                        <span className='slideCard__subtitle'>Publicado: {release_date}</span>
                    </div>
                    <div>
                        <button
                            style={{ backgroundColor: '#E3513D' }}
                            onClick={removeAlbum}
                        > - Remove album</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SlideCard