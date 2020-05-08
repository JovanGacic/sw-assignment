import { 
    FETCH_RESOURCES_REQUEST,
    FETCH_RESOURCES_SUCCESS,
    FETCH_RESOURCES_ERROR,
    FETCH_SPECIFIC_RESOURCE_REQUEST,
    FETCH_STARSHIPS_SUCCESS,
    FETCH_PEOPLE_SUCCESS,
    FETCH_FILMS_SUCCESS,
    FETCH_SPECIES_SUCCESS,
    FETCH_PLANETS_SUCCESS,
    FETCH_VEHICLES_SUCCESS
   } from '../actions/';

export default (
state = {
    resources: {},
    starships: [],
    people: [],
    films: [],
    planets: [],
    species: [],
    vehicles: [],
    fetchResourcesError: ''
 },
action
 ) => {
  switch (action.type) {
   case FETCH_RESOURCES_REQUEST:
       return {
           ...state
       }
   case FETCH_RESOURCES_SUCCESS:
       return {
           ...state,
           resources: action.resources
       }
   case FETCH_SPECIFIC_RESOURCE_REQUEST: 
       return {
           ...state
       }
   case FETCH_STARSHIPS_SUCCESS:
       return {
           ...state,
           starships: action.data
       }
    case FETCH_PEOPLE_SUCCESS: 
       return {
           ...state,
           people: action.data
       }
    case FETCH_PLANETS_SUCCESS: 
       return {
           ...state,
           planets: action.data
       }
    case FETCH_FILMS_SUCCESS: 
       return {
           ...state,
           films: action.data
       }
    case FETCH_SPECIES_SUCCESS: 
       return {
           ...state,
           species: action.data
       }
    case FETCH_VEHICLES_SUCCESS: 
       return {
           ...state,
           vehicles: action.data
       }
    case FETCH_RESOURCES_ERROR:
        return {
            ...state,
            fetchResourcesError: action.message
        }
   default:
       return state;
};
}