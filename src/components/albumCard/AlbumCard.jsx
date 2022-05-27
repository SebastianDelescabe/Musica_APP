import React from 'react';
import './AlbumCard.css'

const AlbumCard = ({ album }) => {

    const { release_date, images,name } = album


    return (
        <div className='albumCard'>
            <img src={images[0].url} alt="" />
            <span className='albumCard__title'>{name}</span>
            <span className='albumCard__release'>Publicado: {release_date}</span>
            <button> + Add album</button>
        </div>
    )
}

export default AlbumCard