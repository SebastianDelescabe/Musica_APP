import React, { useState } from 'react';
import { getAlbums } from '../../helpers/getAlbums';
import { AlbumCard } from '../index'
import './Home.css';

const Home = () => {

  const [input, setInput] = useState("")

  const [albumes, setAlbumes] = useState(null)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = await getAlbums(input)
    console.log(data);
    const albumeShow = data.slice(0, 4);
    setAlbumes(albumeShow)

  }

  return (
    <>
      <div className='home__header'>
        <span className='home__header-title'>Busca tus <span>albumes</span></span>
        <span className='home__header-subtitle'> Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus albumes favoritos</span>
      </div>
      <div>
        <div className='home__search'>
          <form onSubmit={handleOnSubmit}>
            <input
              type='text'
              placeholder='Search...'
              autoComplete='off'
              value={input}
              onChange={handleInputChange}
            />
            <button
              type='submit'
            >
              Search</button>
          </form>
        </div>
      </div>
      {
        albumes && (
          <div className='home__body'>
            <span className='home__body-text'>Guarda tus álbumes favoritos de <em><b>{input}</b></em></span>
            <div className='home__body-cards'>
              {
                albumes.map(e => (
                  <AlbumCard
                    album={e.album}
                    key={e.id}
                  />
                ))
              }
            </div>
            <div className='home__body-pagination'>
              <span>pagination</span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home