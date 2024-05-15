import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { FirebaseAuth } from './config';

export const singEmailAndPassword = async ({ email, password }) => {

    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { displayName, photoURL, uid } = result.user

        return {
            success: true,
            email,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage,
        };
    }
}

export const singInWithGoogle = async () => {

    const googleProvider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        //Obtener los resultados de las credenciales
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { email, displayName, photoURL, uid } = result.user

        return {
            success: true,
            email,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage,
        };
    }
}

export const singInWithFacebook = async () => {


    try {
        const facebookProvider = new FacebookAuthProvider();

        const result = await signInWithPopup(FirebaseAuth, facebookProvider);

        // const credential = FacebookAuthProvider.credentialFromResult(result);

        const { email, displayName, photoURL, uid } = result.user

        return {
            success: true,
            email,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage,
        };
    }
}

export const singInWithGitHub = async () => {



    try {

        const githubProvider = new GithubAuthProvider();

        const result = await signInWithPopup(FirebaseAuth, githubProvider);
        const { email, displayName, photoURL, uid } = result.user

        return {
            success: true,
            email,
            displayName,
            photoURL,
            uid
        };

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage,
        };
    }
}

export const singInWithEmailAndPassword = async ({ username, email, password }) => {

    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password)

        const { photoURL, uid, displayName } = result.user

        // Se actualiza el displayNAme ya que no lo tenemos
        await updateProfile(FirebaseAuth.currentUser, { displayName: username })

        return {
            success: true,
            email,
            username,
            displayName,
            photoURL,
            uid
        };


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            success: false,
            errorCode,
            errorMessage,
        };

    }
}