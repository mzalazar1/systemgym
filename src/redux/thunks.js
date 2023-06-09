import { addSoc } from './Socios/socio.actions';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

// aca defino las fn

export const getSocios = () => {

    const dispatch = useDispatch()

    const urlGetSoc = 'http://localhost:5001/api/products'

    useEffect(() => {
        return async () => {
            console.log("me ejecuto")
            const response = await fetch(urlGetSoc)
            const responseJSON = await response.json()
            responseJSON.data.forEach(element => {
                dispatch(addSoc(element));
            });
        }
    }, [])
}

export const addSocio = () => {
    return async () => {
        const response = await fetch(process.env.REACT_APP_URL)
        const data = await response.json()
        console.log(data)
    }
}