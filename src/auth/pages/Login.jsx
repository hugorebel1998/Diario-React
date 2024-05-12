import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAutentication, startGoogleSign } from '../../store/auth';

import { Button, Grid, Link, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'hugorebel1998@gmail.com',
        password: '12345678',

    });



    const onSubmit = (event) => {
        event.preventDefault();


        const user = {
            email,
            password,
        }
        dispatch(checkingAutentication());

        console.log({ user })
    }

    const onGoogleSignIn = () => {
        console.log("click..")

        dispatch(startGoogleSign());
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
                    <Grid item xs={12} md={12} lg={6}>
                        <Button type='submit' variant="contained" fullWidth startIcon={<LoginIcon />}>Inicio sesión</Button>
                    </Grid>

                    <Grid item xs={12} md={12} lg={6}>
                        <Button type='button' onClick={onGoogleSignIn} variant="contained" fullWidth startIcon={<GoogleIcon />}>Google</Button>
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


