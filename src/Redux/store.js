
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as AppReducer } from "./App/reducer"

const rootReducer = combineReducers({
    app: AppReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))


export {store}