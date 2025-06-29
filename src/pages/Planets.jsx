import React from 'react'
import { useEffect } from 'react';
import { getAllPlanets } from "../services/fetch.js";
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useNavigate } from 'react-router-dom'
import "../index.css";

function Planets() {
  const { store, dispatch } = useGlobalReducer();
  const { planetas } = store

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/planetDetail/${id}`)
  }

  useEffect(() => {
    getAllPlanets(dispatch)
  }, [dispatch]);

  return (
    <>
      <div className="planet">
        {planetas.map((planeta) => (
          <div key={planeta._id} className="tarjetaP">
            <img className='foto' src={planeta.image} alt={planeta.name} />
            <h1 className='nombre'>{planeta.name}</h1>
            <button
              className="btn btn-primary botoncito"
              onClick={() => handleNavigate(planeta._id)}
            >
              Detalle
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Planets
