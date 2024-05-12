import { checkingCredentials } from "./authSlice"

export const checkingAutentication = (email, password) => {

    return async (dispatch) => {
        // Se propesa las credenciales del usuario
        dispatch(checkingCredentials())

    }
}


export const startGoogleSign = () => {

    return async (dispatch) => {
        // Se propesa las credenciales del usuario Google
        dispatch(checkingCredentials())

    }
}
