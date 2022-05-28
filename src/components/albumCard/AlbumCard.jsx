import React, { useContext } from 'react';
import { Favorites } from '../../context/Favorites';
import './AlbumCard.css'

const AlbumCard = ({ album, albums }) => {

    const { release_date, image, name } = album
    const { favorites, setFavorites } = useContext(Favorites)

    const addAlbum = () => {

        const alreadyIn = favorites.find(favorite => favorite.id === album.id)

        if (!alreadyIn || alreadyIn.length === 0) {

            setFavorites((favorites) => [...favorites, album])
            const findItem = albums.findIndex(e => e.id === album.id)
            albums[findItem].favorite = true

        } else {
            console.log('ya se encuentra en favoritos');
        }
    }

    const removeAlbum = () => {
        const filterFavorite = favorites.filter(favorite => favorite.id !== album.id)
        setFavorites(filterFavorite)
        const findItem = albums.findIndex(e => e.id === album.id)
        albums[findItem].favorite = false
    }

    return (
        <div className='albumCard'>
            <img src={image.url} alt="" />
            <span className='albumCard__title'>{name.substring(0, 50)}</span>
            <span className='albumCard__release'>Publicado: {release_date}</span>
            {
                !album.favorite ?
                    <button onClick={addAlbum}> + Add album</button>
                    :
                    <button style={{ backgroundColor: '#E3513D' }} onClick={removeAlbum}> - Remove album</button>
            }
        </div>
    )
}

export default AlbumCard