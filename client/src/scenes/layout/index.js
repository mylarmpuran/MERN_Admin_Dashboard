import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from "components/Sidebar"

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setisSidebarOpne] = useState(true);
  return (
    <Box width="100%" height="100%">
        <Sidebar
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setisSidebarOpne={setisSidebarOpne}
        />

        <Box>
            <Navbar
             isSidebarOpen={isSidebarOpen}
            setisSidebarOpne={setisSidebarOpne}
            />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout
