import { ADD_PURCHASE, DELETE_PURCHASE } from "../../actionTypes";
import {
    getErrorPurchases, getShoppingBasket
} from "../../actions";
const initialState = {
    purchaseList: []
}
export const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PURCHASE:
            return {
                ...state,
                purchaseList: [...state.purchaseList, action.payload]
            };
        case DELETE_PURCHASE:
            return {
                ...state,
                purchaseList: state.purchaseList.filter((purchase) => purchase[0].product__id !== action.payload)
            };
        default:
            return state;
    }
};

export const addPurchase = (id, quantity, img) => {
    console.log(img)
    return async dispatch => {
        try {
            const reject = await fetch("https://dummyjson.com/carts/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: 1,
                    products: [
                        {
                            id: id,
                            quantity: quantity,
                        }
                    ]
                })
            });
            if (!reject.ok) {
                throw new Error(`Request failed with status ${reject.status}`);
            }

            const dataMid = await reject.json();
            const data = dataMid.products
            console.log(data)
            dispatch(getShoppingBasket(data, img))
        } catch (e) {
            dispatch(getErrorPurchases(e))
        }
    }
}
