import {Navigate, Outlet, useLocation} from "react-router-dom";
import {setAuthenticated, setDrawerOpen} from "store/config";
import {logout} from "store/auth";
import {useAppDispatch, useAppSelector, useConfig} from "hooks";
import {Box, Button, Container, Divider, Grid, IconButton, List, Toolbar, Typography} from "@mui/material";
import {AppBar} from "components/painelLayout/appBar";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Drawer} from "components/painelLayout/drawer";


const PainelLayout = () => {
    const location = useLocation();
    const {authenticated, drawerOpen, menuAtual} = useAppSelector(useConfig)
    const dispatch = useAppDispatch();


    const handleLogout = () => {
        dispatch(logout());
        dispatch(setAuthenticated(false));
    }

    const toggleDrawer = () => {
        dispatch(setDrawerOpen(!drawerOpen));
    }

    if (!authenticated) {
        return <Navigate to="/auth/login" state={{from: location}} replace/>
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute" open={drawerOpen}>
                <Toolbar sx={{pr: '24px'}}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(drawerOpen && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {menuAtual?.toUpperCase()}
                    </Typography>
                    <Button onClick={handleLogout} variant={"contained"}>
                        Sair
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={drawerOpen}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <Divider sx={{ my: 1 }} />
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : "",
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar/>
                <Container maxWidth="xl" sx={{my: 3}}>
                    <Outlet/>
                </Container>
            </Box>
        </Box>
    )
}


export default PainelLayout