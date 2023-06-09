export const addSoc = (socio) => {
    return (dispatch) => {
        dispatch(addSocAsync(socio));
    };
};

export const addSocAsync = (socio) => {
    return {
        type: "ADD_SOCIO",
        payload: socio
    };
};

export const editSoc = (socio) => {
    return {
        type: "EDIT_SOCIO",
        payload: socio
    };
};

export const removeSoc = (id) => {
    return {
        type: "REMOVE_SOCIO",
        payload: id
    };
};