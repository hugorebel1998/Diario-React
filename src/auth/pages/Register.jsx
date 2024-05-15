import { useState } from 'react';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';

import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { startEmailAndPassword } from '../../store/auth';
import { useMemo } from 'react';


const usuario = {
    username: '',
    email: '',
    password: ''
}

const formValidations = {
    username: [(value) => value.length >= 1, 'El nombre es obligatorio'],
    email: [(value) => value.includes('@'), 'EL correo no incluye un @.'],
    password: [(value) => value.length >= 6, 'La contraseña debe de contener más de 6 caracteres'],
};


export const Register = () => {


    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector((state) => state.auth);

    const isCheckingStatus = useMemo(() => status === 'en-revision', [status])

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { formState, username, email, password, usernameValid, emailValid, passwordValid, isFormValid, onInputChange } = useForm(usuario, formValidations);


    console.log({isFormValid, emailValid, passwordValid})
    const onSubmit = (event) => {
        event.preventDefault();

        setFormSubmitted(true);

        if (!isFormValid)
            return;

        dispatch(startEmailAndPassword(formState));
    }


    return (
        <AuthLayout title='Crear nueva cuenta'>
            <form onSubmit={onSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Nombre completo"
                            placeholder='Nombre completo'
                            fullWidth
                            type='text'
                            variant="standard"
                            autoComplete="off"
                            name='username'
                            value={username}
                            onChange={onInputChange}
                            error={!!usernameValid && formSubmitted}
                            // helperText={usernameValid}

                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Correo electrónico"
                            placeholder='Correo electrónico'
                            fullWidth
                            type='email'
                            variant="standard"
                            autoComplete="off"
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Contraseña"
                            placeholder='Contraseña'
                            fullWidth
                            type='password'
                            variant="standard"
                            autoComplete="off"
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                </Grid> 

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={12} lg={12} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity="error">{errorMessage}</Alert>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <Button disabled={isCheckingStatus} type='submit' variant="contained" fullWidth startIcon={<AddIcon />}>Crear cuenta</Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
                    <Link component={RouterLink} underline="none" color="inherit" to="/auth/login">
                        Ya cuento con una cuenta
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
