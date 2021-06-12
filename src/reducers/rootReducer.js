import { uiReducers } from "./uiReducers";
import { combineReducers } from 'redux';



export const rootReducer = combineReducers({
    ui: uiReducers,
})
