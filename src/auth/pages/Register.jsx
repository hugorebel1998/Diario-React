import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm';

import { Button, Grid, Link, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';


const usuario = {
    username: 'hguillermo96',
    email: 'hugo_gs1996@hotmail.com',
    password: '12345678'
}

export const Register = () => {

    const { username, email, password, formState, onInputChange } = useForm(usuario);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({usuario: formState})
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
                            required
                            variant="standard"
                            autoComplete="off"
                            name='username'
                            value={username}
                            onChange={onInputChange}

                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Correo electrónico"
                            placeholder='Correo electrónico'
                            fullWidth
                            type='email'
                            required
                            variant="standard"
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
                            required
                            variant="standard"
                            autoComplete="off"
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Button type='submit' variant="contained" fullWidth startIcon={<AddIcon />}>Crear cuenta</Button>
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
