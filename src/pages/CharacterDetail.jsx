import React, { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from "../services/fetch.js";
import "../index.css";

function CharacterDetail() {

  const { store, dispatch } = useGlobalReducer();
  const { personaje, favoritos } = store;

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleCharacter(dispatch, id);
    }
  }, [dispatch, id]);

  const handleFavorito = (name) => {
    dispatch({ type: "guardarFavoritos", payload: name });
  };

  return (
    <div className='container-detalle'>
      {personaje !== null ? (
        <div>
          <div className="caja">
            <h1 className='titulo'>{personaje.name}</h1>
            <img className='fotico' src={personaje.image} alt={personaje.name} />

            <p className='textico'>{personaje.description}</p>
            <div className="cajita">
              <button
                className="botoncito btn btn-outline-danger"
                onClick={() => handleFavorito(personaje.name)}
                disabled={favoritos.includes(personaje.name)}
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className='cargando'>Cargando personaje...</p>
      )}
    </div>
  );
}

export default CharacterDetail;
