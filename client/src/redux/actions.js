import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const COUNTRY_BY_NAME = 'COUNTRY_BY_NAME';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION';


//! Esta función trae todos los countries del endpoint
export const getCountries = () => {
    return async function (dispatch) {
        try{
        const dbData = await axios.get(
            "/countries/"
        );
        const countries = dbData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
        alert('The api countries it doesnt work');
        console.log(error);
    }
    };
};

//! Esta función trae un country por id desde el endpoint
export const getCountryById = (countryId) => {
    return function (dispatch) {
        axios.get(`/countries/?id=${countryId}`)
            .then(response => {
                dispatch({ type: GET_COUNTRY_BY_ID, payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const countryByName = (countries) => {
    return {
        type: COUNTRY_BY_NAME,
        payload: countries
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}
export function filterByContinent(payload) {
    console.log("Este es el contenido de payload",payload)
    return { type: FILTER_BY_CONTINENT, payload };
}

export function sortByName(payload) {
    console.log("Este es el contenido de payload Sort By Name",payload)
    return { type: SORT_BY_NAME, payload };
}

export function sortByPopulation(payload) {
    console.log("Este es el contenido de payload Sort By Population",payload)
    return { type: SORT_BY_POPULATION, payload };
}