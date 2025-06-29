const URL = "https://starwars-databank-server.vercel.app/api/v1/"

export const getAllCharacters = async (dispatch) => {
    try {
        const response = await fetch (`${URL}characters`);
        if (!response.ok){
            throw new Error("HTTP Error!", response.status);
        }
        const data = await response.json();
        dispatch({
            type: "getAllPersonajes",
            payload: data.data
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};

export const getSingleCharacter = async (dispatch, id) => {
    try {
        const response = await fetch (`${URL}characters/${id}`);
        if (!response.ok){
            throw new Error("HTTP Error!", response.status);
        }
        const data = await response.json();
        dispatch({
            type: "getSingleCharacter",
            payload: data
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};

export const getAllPlanets = async (dispatch) => {
    try {
        const response = await fetch (`${URL}locations`);
        if (!response.ok){
            throw new Error("HTTP Error!", response.status);
        }
        const data = await response.json();
        dispatch({
            type: "getAllPlanets",
            payload: data.data
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};
export const getSinglePlanet = async (dispatch, id) => {
    try {
        const response = await fetch (`${URL}locations/${id}`);
        if (!response.ok){
            throw new Error("HTTP Error!", response.status);
        }
        const data = await response.json();
        dispatch({
            type: "getSinglePlanet",
            payload: data
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};

export const getAllVehicles = async (dispatch) => {
    try {
        const response = await fetch (`${URL}vehicles`);
        if (!response.ok){
            throw new Error(`HTTP error! status:$(response.status)`);
        }
        const data = await response.json();
        dispatch({
            type: "getAllVehiculos",
            payload: data.data,
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};
export const getSingleVehicle = async (dispatch, id) => {
    try {
        const response = await fetch (`${URL}vehicles/${id}`);
        if (!response.ok){
            throw new Error("HTTP Error!", response.status);
        }
        const data = await response.json();
        dispatch({
            type: "getSingleVehicle",
            payload: data
        })

    } catch (error) {
        console.error ("Error al obtener datos.", error)
    }
};