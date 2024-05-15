import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'en-revision', // en-revision ,no-autenticado, autenticado
        uid: null,
        email: null,
        name: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'autenticado';
            state.uid = payload.uid;
            state.email = payload.email;
            state.name = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },

        logout: (state, { payload }) => {
            state.status = 'no-autenticado';
            state.uid = null;
            state.email = null;
            state.name = null
            state.photoURL = null;
            state.errorMessage = payload;
        },

        checkingCredentials: (state) => {
            state.status = 'en-revision';
        }

    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;