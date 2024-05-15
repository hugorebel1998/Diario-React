import { useDispatch } from "react-redux";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { MenuOutlined } from "@mui/icons-material";
import { startLogout } from "../../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

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
                <Button onClick={onLogout} color="error" startIcon={<LogoutIcon />}>Salir</Button>
            </Toolbar>

        </AppBar>
    )
}
