import { todoReducer } from ".";
import { combineReducers } from "redux";
import { todoReducer1 } from ".";
import { todoReducer2 } from ".";
const rootReducers = combineReducers({
    todoReducer, todoReducer1, todoReducer2
})
export default rootReducers