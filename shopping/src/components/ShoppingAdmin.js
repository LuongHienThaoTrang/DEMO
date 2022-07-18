import React from 'react'
import '../admin.scss';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'

// function return component
// class call render method => return component

class ShoppingAdmin extends React.Component {
    state = {
        sidebarOpen: true
    }

    toggleSidebar = () => {
        this.setState({ 
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render() {
        return (
            <div className="row">
                {/* Khi sidebar đóng => display: none */}
                <div className="col-md-3" style={{ display: this.state.sidebarOpen ? 'block' : 'none' }}>
                    <Sidebar />
                </div>
                {/* Khi sidebar đóng => col-md-12 */}
                <div className={this.state.sidebarOpen ? 'col-md-9' : 'col-md-12'}>
                    {/* NAVBAR */}
                    Navbar
                    <Navbar onToggleSidebar={this.toggleSidebar} />
                    <MainContent />
                </div>
            </div>
        )
    }
}

export default ShoppingAdmin