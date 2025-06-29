export const initialStore = () => {
  return {
    personajes: [],
    personaje: null,
    planetas: [],
    planeta: null,
    vehiculos: [],
    vehiculo: null,
    favoritos: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'getAllPersonajes':
      return {
        ...store, personajes: action.payload
      };
    case 'getSingleCharacter':
      return {
        ...store, personaje: action.payload
      };
    case 'getAllPlanets':
      return {
        ...store, planetas: action.payload
      };
    case 'getSinglePlanet':
      return {
        ...store, planeta: action.payload
      };
    case 'getAllVehiculos':
      return {
        ...store, vehiculos: action.payload
      };
    case 'getSingleVehicle':
      return {
        ...store, vehiculo: action.payload
      };
    case 'guardarFavoritos': {
      const name = action.payload;
      if (store.favoritos.includes(name)) return store;
      return {
        ...store,
        favoritos: [...store.favoritos, name]
      }
    }
    case 'removeFavoritos':
      const nameRemover = action.payload;
      return {
        ...store, 
        favoritos: store.favoritos.filter(f => f !== nameRemover)
      }

    default:
      throw Error('Unknown action.');
  }
}
