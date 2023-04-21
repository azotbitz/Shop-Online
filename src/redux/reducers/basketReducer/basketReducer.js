import {
    ERROR_SHOPPING_BASKET,
    GET_SHOPPING_BASKET,
    LOADING_SHOPPING_BASKET
} from "../../actionTypes";
import {
    getErrorShoppingBasket,
    getLoadingShoppingBasket,
    getShoppingBasket
} from "../../actions";
const initialState = {
    basketList: [],
    loader: false,
    error: null
};
export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOPPING_BASKET:
            return {
                ...state,
                basketList: action.payload,
                loader: false
            }
        case LOADING_SHOPPING_BASKET:
            return {
                ...state,
                loader: true
            }
        case ERROR_SHOPPING_BASKET:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        default:
            return state;
    }
};


export const loadShoppingBasket = () => {
    return async dispatch => {
        dispatch(getLoadingShoppingBasket())
        try {
            const response = await fetch("https://dummyjson.com/carts/user/1");
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const dataMid = await response.json();
            const data = dataMid.carts[0].products
            console.log(data)
            dispatch(getShoppingBasket(data))
        } catch (e) {
            dispatch(getErrorShoppingBasket(e))
        }
    }
}