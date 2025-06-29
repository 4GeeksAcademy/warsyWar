import React from 'react'
import { useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom'
import { getSinglePlanet } from "../services/fetch.js"

function PlanetDetail() {

  const { store, dispatch } = useGlobalReducer();
  const { planeta, favoritos } = store

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSinglePlanet(dispatch, id)
    }
  }, [dispatch, id]);
  
    const handleFavorito = (name) => {
    dispatch({ type: "guardarFavoritos", payload: name });
  };
  
  return (
    <div className='container-detalle'>
      {planeta !== null ? (
        <div>
          <div className="caja">
            <h1 className='titulo'>{planeta.name}</h1>
            <img className='fotico' src={planeta.image} alt={planeta.name} />

            <p className='textico'>{planeta.description}</p>
            <div className="cajita">
              <button
                className="botoncito btn btn-outline-danger"
                onClick={() => handleFavorito(planeta.name)}
                disabled={favoritos.includes(planeta.name)}
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className='cargando'>Cargando planeta...</p>
      )}
    </div>
  );
}

export default PlanetDetail

