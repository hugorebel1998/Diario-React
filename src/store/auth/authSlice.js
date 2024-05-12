import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'no-autenticado', // en-revision ,no-autenticado, autenticado
        uid: null,
        email: null,
        name: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {

        },

        logout: (state, action) => {

        },

        checkingCredentials: (state) => {
            state.status = 'en-revision';

        }

    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;