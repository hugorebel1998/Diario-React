import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Journal App</Typography>
                <Button color="error" startIcon={<LogoutIcon />}>Salir</Button>
            </Toolbar>

        </AppBar>
    )
}
