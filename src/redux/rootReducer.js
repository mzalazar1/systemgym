import { combineReducers } from "redux";
import reducer from './Socios/socio.reducer';

const rootReducer = combineReducers({
    Reduc: reducer,
});

export default rootReducer;