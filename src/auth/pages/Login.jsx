import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

import { Button, Grid, Link, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

export const Login = () => {
    return (
        <AuthLayout title='Inicio de sesión'>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Correo electrónico"
                            placeholder='Correo electrónico'
                            fullWidth
                            type='email'
                            required
                            variant="standard"
                            size="small"
                            autoComplete="off"
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Contraseña"
                            placeholder='Contraseña'
                            fullWidth
                            type='password'
                            required
                            variant="standard"
                            size="small"
                            autoComplete="off"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={12} lg={6}>
                        <Button variant="contained" fullWidth startIcon={<LoginIcon />}>Inicio sesión</Button>
                    </Grid>

                    <Grid item xs={12} md={12} lg={6}>
                        <Button variant="contained" fullWidth startIcon={<GoogleIcon />}>Google</Button>
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
