import React from 'react'
import '../assets/style/admin.scss'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



// function return component
// class call render method => return component

function ShoppingAdmin() {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        // Nếu trang admin chưa có adminToken === chưa login: thì chuyển hướng qua trang login
        if(!JSON.parse(window.localStorage.getItem('adminToken'))) {
            navigate('/admin/login')
        }
    }, [])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Khi sidebar đóng => display: none */}
                <div className="col-md-3 bg" style={{ display: sidebarOpen ? 'block' : 'none' }}>
                    <Sidebar />
                </div>
                {/* Khi sidebar đóng => col-md-12 */}
                <div className={sidebarOpen ? 'col-md-9' : 'col-md-12'}>
                    {/* NAVBAR */}
                    <Navbar onToggleSidebar={toggleSidebar} />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default ShoppingAdmin