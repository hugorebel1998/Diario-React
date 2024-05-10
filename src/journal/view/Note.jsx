import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImagesGalegy } from "./ImagesGalegy"

export const Note = () => {
    return (
        <>

            <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ mb: 1 }}
            >
                <Grid item>
                    <Typography fontSize={39} fontWeight='light'>10 de mayo del 2024</Typography>
                </Grid>

                <Grid item>
                    <Button variant="outlined" color="primary" startIcon={<SaveOutlined />}>Guardar</Button>
                </Grid>
            </Grid>

            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={0}
                sx={{ mt: 5 }}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        type='text'
                        variant='standard'
                        fullWidth
                        placeholder='Ingrese un título'
                        label='Título'
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 3 }}>
                    <TextField
                        type='text'
                        variant='standard'
                        fullWidth
                        multiline
                        minRows={5}
                        placeholder='¿Qué sucedió en el día de hoy?'
                        label='¿Qué sucedió en el día de hoy?'
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 3 }}>
                    <ImagesGalegy />
                </Grid>


            </Grid>
        </>


    )
}
