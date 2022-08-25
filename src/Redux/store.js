<<<<<<< HEAD

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as AppReducer } from "./App/reducer"

const rootReducer = combineReducers({
    app: AppReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))


export {store}
=======
import { legacy_createStore, applyMiddleware,combineReducers,compose } from "redux";
import { reducer  as AppReducer} from "./AppReducer/reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({AppReducer})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
>>>>>>> 91fb4f9b913f398eadc0535770e173f1193c2ebe
