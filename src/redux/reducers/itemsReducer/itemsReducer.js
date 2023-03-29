import {ERROR_ITEMS, GET_ITEMS, LOADING_ITEMS} from "../../actionTypes";
import {getError, getLoading, getItems} from "../../actions";

const initialState = {
    itemsList: [],
    loader: false,
    error: null
};

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                todosList: action.payload,
                loader: false
            }
        case LOADING_ITEMS:
            return {
                ...state,
                loader: true
            }
        case ERROR_ITEMS:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const loadItems = () => {
    return async dispatch => {
        dispatch(getLoading())
        try {
            const response = await fetch("https://dummyjson.com/todos");
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const dataMid = await response.json();
            const data = dataMid.todos
            dispatch(getItems(data))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}

