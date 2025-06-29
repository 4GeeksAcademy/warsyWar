import React from 'react'
import { useEffect } from 'react';
import { getAllVehicles } from "../services/fetch.js";
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useNavigate } from 'react-router-dom'
import "../index.css";

function Vehicles() {
  const { store, dispatch } = useGlobalReducer();
  const { vehiculos } = store

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/vehicleDetail/${id}`)
  }

  useEffect(() => {
    getAllVehicles(dispatch)
  }, [dispatch]);

  return (
    <>
      <div className="vehicul">
        {vehiculos.map((vehiculo) => (
          <div key={vehiculo._id} className="tarjetaV">
            <img className='foto' src={vehiculo.image} alt={vehiculo.name} />
            <h1 className='nombre'>{vehiculo.name}</h1>
            <button
              className="btn btn-primary botoncito"
              onClick={() => handleNavigate(vehiculo._id)}>
              Detalle
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Vehicles
