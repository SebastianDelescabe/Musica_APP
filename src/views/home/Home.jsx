import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BackgroundContext } from '../../context/BackgroundContext';
import { getAlbums } from '../../helpers/getAlbums';
import { AlbumCard, Pagination } from '../../components/index';
import Search from '../../components/search/Search';
import './Home.css';

const Home = () => {

  const token = sessionStorage.getItem('token');

  const [albums, setAlbums] = useState([]);
  const { themeBlack } = useContext(BackgroundContext);

  //------Search----------
  const [input, setInput] = useState("");

  //-------Paginado---------
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const max = Math.floor(albums.length / perPage);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (input.length <= 0) {
      alert('ingresar algo')
    } else {
      const data = await getAlbums(input)
      setAlbums(data)
    }
  }

  useEffect(() => {
    if (input.length === 0) {
      setAlbums([])
    }
  }, [input])


  return (
    <>
      {!token && <Navigate to={'/'} />}
      {token && (
        <div className={!themeBlack && 'App'}>
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
            albums.length > 1 && (
              <div className='home__body'>
                <span className='home__body-text'>Guarda tus álbumes favoritos de <em><b>{input}</b></em></span>
                <div className='home__body-cards'>
                  {
                    albums.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((e, i) => (
                      <AlbumCard
                        album={e}
                        key={e.id + i}
                        setAlbums={setAlbums}
                        albums={albums}
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
        </div>
      )}
    </>
  )
}

export default Home