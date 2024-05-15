import { singInWithFacebook, singInWithGitHub, singInWithGoogle, singInWithEmailAndPassword, singEmailAndPassword, logoutFirebare } from "../../firebase/provider"
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
        dispatch(checkingCredentials());


        const result = await singInWithGitHub();


        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));
    }
}

export const startEmailAndPassword = ({ username, email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithEmailAndPassword({ username, email, password })

        console.log(result.errorMessage)


        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));
    }
}


export const startLogin = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await singEmailAndPassword({ email, password })

        if (!result.success)
            return dispatch(logout(result.errorMessage));


        dispatch(login(result));
    }
}

export const startLogout = () => {

    return async (dispatch) => {

        await logoutFirebare()

        dispatch(logout())
    }
}
