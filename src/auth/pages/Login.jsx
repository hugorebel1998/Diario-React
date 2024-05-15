import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startFacebookSign, startGitHubSign, startGoogleSign, startLogin } from '../../store/auth';

import { Alert, Button, Grid, IconButton, Link, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const usuario = {
    email: '',
    password: ''
}

export const Login = () => {

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector((state) => state.auth)

    const isCheckingStatus = useMemo(() => status === 'en-revision', [status])

    const { formState, email, password, onInputChange } = useForm(usuario);


    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLogin(formState));

    }

    const onGoogleSignIn = () => {

        dispatch(startGoogleSign());
    }

    const onFacebookSignIn = () => {
        dispatch(startFacebookSign())
    }

    const onGitHubSignIn = () => {
        dispatch(startGitHubSign())
    }

    return (
        <AuthLayout title='Inicio de sesión'>
            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Correo electrónico"
                            placeholder='Correo electrónico'
                            fullWidth
                            type='email'
                            variant="standard"
                            size="small"
                            autoComplete="off"
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Contraseña"
                            placeholder='Contraseña'
                            fullWidth
                            type='password'
                            variant="standard"
                            size="small"
                            autoComplete="off"
                            name='password'
                            value={password}
                            onChange={onInputChange}

                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>

                    <Grid item xs={12} md={12} lg={12} display={!!errorMessage ? '' : 'none'}>
                        <Alert severity="error">{errorMessage}</Alert>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <Button
                            disabled={isCheckingStatus}
                            type='submit'
                            variant="contained"
                            fullWidth startIcon={<LoginIcon />}>Inicio sesión</Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={1} md={1} lg={1}>
                        <IconButton
                            color='primary'
                            disabled={isCheckingStatus}
                            onClick={onGoogleSignIn}
                            aria-label="Google">
                            <GoogleIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1}>
                        <IconButton
                            color='primary'
                            disabled={isCheckingStatus}
                            onClick={onFacebookSignIn}
                            aria-label="Facebook">
                            <FacebookIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1}>
                        <IconButton
                            color='primary'
                            disabled={isCheckingStatus}
                            onClick={onGitHubSignIn}
                            aria-label="GitHub">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
                    <Link component={RouterLink} underline="none" color="inherit" to="/auth/register">
                        Crear una cuenta
                    </Link>

                </Grid>
            </form>
        </AuthLayout>
    )
}


