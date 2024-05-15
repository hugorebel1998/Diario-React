import { Card, CardContent, Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
    return (

        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Grid container spacing={0} direction='row' justifyContent='center'>
                <Grid item xs={12} sm={7} md={4} lg={3} xl={3} className="animate__animated animate__zoomIn">
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='h4' sx={{ mb: 4 }}> {title}</Typography>

                            {children}

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}
