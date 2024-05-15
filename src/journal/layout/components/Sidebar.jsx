import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";

export const Sidebar = ({ drawerWidth = 240 }) => {

    const { name, email } = useSelector((state) => state.auth);

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}>

                {/* <Toolbar> */}
                <Box sx={{ p:2}}>
                    <Typography variant="h6" noWrap component='div'>{name}</Typography>

                    <Typography variant="body1" noWrap component='span'>{email}</Typography>
                </Box>

                {/* </Toolbar> */}
                <Divider />

                <List>
                    {
                        meses.map((mes) => (
                            <ListItem key={mes} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={mes} />
                                        <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>

        </Box>

    )
}
