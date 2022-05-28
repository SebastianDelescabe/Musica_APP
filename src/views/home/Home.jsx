import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BackgroundContext } from '../../context/BackgroundContext';
import { getAlbums } from '../../helpers/getAlbums';
import { AlbumCard, Pagination, Search } from '../../components';
import Swal from 'sweetalert2'

import './Home.css';

const Home = () => {

  const token = sessionStorage.getItem('token');

  const [albums, setAlbums] = useState([]);
  const { themeBlack } = useContext(BackgroundContext);

  //------Search----------
  const [input, setInput] = useState("");

  //-------Paginado---------
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4); // eslint-disable-line
  const max = Math.floor(albums.length / perPage);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    //Compruebo que este lleno el imput de busqueda
    if (input.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Completar el campo de busqueda',
        confirmButtonColor: '#DD6B55',
      })
    } else {
      const data = await getAlbums(input)
      //Compruebo que se hayan obtenido datos
      if (data.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'No se encontraron resultados',
          confirmButtonColor: '#DD6B55',
        })
      } else {
        setAlbums(data)
      }
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
        <div className={!themeBlack ? 'app__white' : 'app__black'}>
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
          {albums.length > 1 && (
            <div className='home__body animate__animated animate__fadeIn'>
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
          )}
        </div>
      )}
    </>
  )
}

export default Home