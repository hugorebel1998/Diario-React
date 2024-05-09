import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout'

import { Button, Grid, Link, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const Register = () => {
    return (
        <AuthLayout title='Crear nueva cuenta'>
            <form>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            label="Nombre completo"
                            placeholder='Nombre completo'
                            fullWidth
                            type='text'
                            required
                            variant="standard"
                            size="small"
                            autoComplete="off"
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
                    <Grid item xs={12} md={12} lg={12}>
                        <Button variant="contained" fullWidth startIcon={<AddIcon />}>Crear cuenta</Button>
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
