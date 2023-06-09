import rootReducer from './rootReducer';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store; 