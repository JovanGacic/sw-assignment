import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    AUTH_REQUEST_AND_SUCCESS
} from '../actions/';

export default (
    state = {
        loginError: false,
        loginErrorMessage: '',
        logoutError: false,
        isAuthenticated: false,
        username: ''
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                username: action.username,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true,
                loginErrorMessage: action.message
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loginError: false,
                loginErrorMessage: '',
                logoutError: false,
                isAuthenticated: false,
                username: ''
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
            };
        case AUTH_REQUEST_AND_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                username: localStorage.getItem('username'),
            }
        default:
            return state;
    };
}