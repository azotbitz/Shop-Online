import {ERROR_ITEMS, GET_ITEMS, GET_SEARCH_ITEMS, LOADING_ITEMS} from "../../actionTypes";
import {getError, getLoading, getItems, getSearchItems} from "../../actions";

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
                itemsList: action.payload,
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
        case GET_SEARCH_ITEMS:
        return {
            ...state,
            itemsList: action.payload,
            loader: false
        }
        default:
            return state
    }
}

export const loadItems = () => {
    return async dispatch => {
        dispatch(getLoading())
        try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const dataMid = await response.json();
            const data = dataMid.products
            dispatch(getItems(data))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}

export const searchItems = (query) => {
    return async dispatch => {
        dispatch(getLoading())
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const dataMid = await response.json();
            const data = dataMid.products
            dispatch(getSearchItems(data))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}

