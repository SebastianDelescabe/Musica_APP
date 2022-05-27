import React, { useState } from 'react';
import { getAlbums } from '../../helpers/getAlbums';
import { AlbumCard, Pagination } from '../index';
import Search from '../search/Search';
import './Home.css';

const Home = () => {

  const [albumes, setAlbumes] = useState([])

  //------Search----------
  const [input, setInput] = useState("")

  //-------Paginado---------
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(4)
  const max = Math.floor(albumes.length / perPage);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const data = await getAlbums(input)
    setAlbumes(data)
  }

  return (
    <>
      <div className='home__header'>
        <span className='home__header-title'>Busca tus <span>albumes</span></span>
        <span className='home__header-subtitle'> Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus albumes favoritos</span>
      </div>
      <div>
        <Search
          handleOnSubmit={handleOnSubmit}
          input={input}
          setInput={setInput}
        />
      </div>
      {
        albumes.length > 1 && (
          <div className='home__body'>
            <span className='home__body-text'>Guarda tus álbumes favoritos de <em><b>{input}</b></em></span>
            <div className='home__body-cards'>
              {
                albumes.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map(e => (
                  <AlbumCard
                    album={e.album}
                    key={e.id}
                  />
                ))
              }
            </div>
            <div className='home__body-pagination'>
              <Pagination
                page={page}
                setPage={setPage}
                max={max} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home