
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';


import DashboardIcon from '@mui/icons-material/Dashboard';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const navItems = [
    {
        name: "Dashboard",
        icon: <DashboardIcon className='text-white' />,
        path: "/dashboard"
    },
    {
        name: "Barcodes",
        icon: <QrCode2Icon className='text-white' />,
        path: "/dashboard/scanner"
    },
    {
        name: "Invoice",
        icon: <ReceiptIcon className='text-white' />,
        path: "/dashboard/invoice"
    },
    {
        name: "Orders",
        icon: <AllInboxIcon className='text-white' />,
        path: "/dashboard/orders"
    },
    {
        name: "Track Orders",
        icon: <LocalShippingIcon className='text-white' />,
        path: "/dashboard/track"
    },
    {
        name: "Customers",
        icon: <PeopleAltIcon className='text-white' />,
        path: "/dashboard/customers"
    }
]



const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        backgroundImage: `url("./assets/img/bg1.jpg")`,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Dashboard = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const move = (path) => {
        navigate(path);
    }
    const [open, setOpen] = useState(false);



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }} >
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }), }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            E Shop
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className='xyz' variant="permanent" open={open}>
                    <DrawerHeader className='bg-gray-600'> 
                    {/* ackground-image: linear-gradient(156deg, #9B4CFD, #FC3E7C,#FF7B40); */}
                        <Typography variant="h6" noWrap component="div">
                            Electonic Shop
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Box className="xyz">
                        <Box className="bgx text-white ">
                            <List>
                                {navItems.map((item, index) => (
                                    // <ListItem className='text-white'  key={index} >{item}</ListItem>
                                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                            onClick={()=>{move(item.path)}}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 ,mt:"64px" }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}



export default Dashboard
