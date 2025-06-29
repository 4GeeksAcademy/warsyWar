import React, { useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'


function Favoritos() {
  const { store, dispatch } = useGlobalReducer();
  const { favoritos } = store

  const handleDelete = (nombre) => {
    dispatch({ type: "removeFavoritos", payload: nombre });
  };

  return (
    <div className="container mt-4">
      <h1 className='text-warning'>Mis favoritos</h1>
      {favoritos.length > 0 ? (
        <ul className="list-group">
          {favoritos.map((f, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {f} <button onClick={() => handleDelete(f)}>❌</button></li>
          ))}
        </ul>
      ) : (
        <p>No hay favoritos...</p>
      )
      }
    </div>
  )
}

export default Favoritos;