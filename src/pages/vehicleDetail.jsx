import React from 'react'
import { useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom'
import { getSingleVehicle } from "../services/fetch.js"
import "../index.css";

function VehicleDetail() {

  const { store, dispatch } = useGlobalReducer();
  const { vehiculo, favoritos } = store

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getSingleVehicle(dispatch, id)
    }
  }, [dispatch, id]);

  const handleFavorito = (name) => {
    dispatch({ type: "guardarFavoritos", payload: name });
  };

  return (
    <div className='container-detalle'>
      {vehiculo !== null ? (
        <div>
          <div className="caja">
            <h1 className='titulo'>{vehiculo.name}</h1>
            <img className='fotico' src={vehiculo.image} alt={vehiculo.name} />

            <p className='textico'>{vehiculo.description}</p>
            <div className="cajita">
              <button
                className="botoncito btn btn-outline-danger"
                onClick={() => handleFavorito(vehiculo.name)}
                disabled={favoritos.includes(vehiculo.name)}
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className='cargando'>Cargando vehiculo...</p>
      )}
    </div>
  );
}

export default VehicleDetail

