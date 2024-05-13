import { singInWithFacebook, singInWithGitHub, singInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

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

        const result = await singInWithGoogle();

        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));

    }
}

export const startFacebookSign = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials())


        const result = await singInWithFacebook();


        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));
    }
}

export const startGitHubSign = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials())


        const result = await singInWithGitHub();


        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));
    }
}
