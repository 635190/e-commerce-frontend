
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopIcon from '@mui/icons-material/Shop';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ShopIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <GroupsIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DeliveryDiningIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <AddShoppingCartIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
            <>
                {/* {isLargeScreen && <Toolbar/>} */}
                <List>
                    {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>)}
                </List>
            </>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )

    return (
        

            <div className='relative flex h-[100vh]'>
                <CssBaseline />

                <div className='shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0'
                >
                    {drawer}
                </div>


                <div className='w-[85%] h-full ml-[15%]'>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/product/create' element={<CreateProductForm />} />
                        <Route path='/products' element={<ProductTable />} />
                        <Route path='/orders' element={<OrdersTable />} />
                        <Route path='/customers' element={<CustomersTable />} />

                    </Routes>
                </div>

            </div>

       
    )
}

export default Admin