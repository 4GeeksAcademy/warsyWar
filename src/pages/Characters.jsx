import React from 'react'
import { useEffect } from 'react';
import { getAllCharacters } from "../services/fetch.js";
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useNavigate } from 'react-router-dom'
import "../index.css";

function Characters() {
  const { store, dispatch } = useGlobalReducer();
  const { personajes } = store

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/characterDetail/${id}`)
  }

  useEffect(() => {
    getAllCharacters(dispatch)
  }, [dispatch]);

  return (
    <>
      <div className="personaj">
        {personajes.map((personaje) => (
          <div key={personaje._id} className="tarjetaC">
            <img className='foto' src={personaje.image} alt={personaje.name} />
            <h1 className='nombre'>{personaje.name}</h1>
            <button
              className="btn btn-primary botoncito"
              onClick={() => handleNavigate(personaje._id)}
            >
              Detalle
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Characters
