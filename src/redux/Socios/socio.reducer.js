import { ADD_SOCIO, EDIT_SOCIO, REMOVE_SOCIO } from "./socio.types";

const INITIAL_STATE = {
    socios: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SOCIO':
            return {
                socios: [...state.socios, action.payload]
            };

        case 'EDIT_SOCIO':
            const updSocDetail = action.payload;
            const updSoc = state.socios.map((socio) => {
                if (socio.id === updSocDetail.id) {
                    return updSocDetail;
                } else {
                    return socio;
                }
            });
            return { socios: updSoc };

        case 'REMOVE_SOCIO':
            return {
                socios: state.socios.filter((socio) => {
                    return socio.id !== action.payload;
                })
            };

        default: return state;
    }
};

export default reducer; 