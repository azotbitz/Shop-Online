import {
    ERROR_ITEMS,
    GET_ITEMS,
    LOADING_ITEMS, LOGIN_ERROR,
    LOGIN_START, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS,
    REGISTER_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS
} from "./actionTypes";

export const getItems = (data) => ({
    type: GET_ITEMS,
    payload: data
});

export const getLoading = () => ({
    type: LOADING_ITEMS
});

export const getError = (e) => ({
    type: ERROR_ITEMS,
    payload: e.toString()
});




export const registerStart = () => ({
    type: REGISTER_START
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
});

export const registerError = (e) => ({
    type: REGISTER_ERROR,
    payload: e.toString()
})




export const loginStart = () => ({
    type: LOGIN_START
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})

export const loginError = (err) => ({
    type: LOGIN_ERROR,
    payload: err.toString()
})




export const logoutStart = () => ({
    type: LOGOUT_START
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const logoutError = (err) => ({
    type: LOGOUT_ERROR,
    payload: err.toString()
})