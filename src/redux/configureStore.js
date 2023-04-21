import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer/userReducer";
import {itemsReducer} from "./reducers/itemsReducer/itemsReducer";
import {basketReducer} from "./reducers/basketReducer/basketReducer";
import {purchaseReducer} from "./reducers/purchaseReducer/purchaseReducer";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    shoppingBaskets: basketReducer,
    purchases: purchaseReducer,
    items: itemsReducer,
    users: userReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

