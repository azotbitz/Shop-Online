import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer/userReducer";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    // chats: chatsReducer,
    // messages: messagesReducer,
    // todos: todosReducer,
    users: userReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

