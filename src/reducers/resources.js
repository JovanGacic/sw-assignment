import { 
    FETCH_RESOURCES_REQUEST,
    FETCH_RESOURCES_SUCCESS,
    FETCH_RESOURCES_ERROR,
    FETCH_SPECIFIC_RESOURCE_REQUEST,
    FETCH_SPECIFIC_RESOURCE_SUCCESS
   } from '../actions/';

export default (
state = {
    resources: {} 
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
   case FETCH_SPECIFIC_RESOURCE_SUCCESS:
       return {
           ...state
       }
   default:
       return state;
};
}