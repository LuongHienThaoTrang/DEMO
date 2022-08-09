
import BarIcon from './../assets/icons/bars-solid';

function Navbar({ onToggleSidebar }) {
    return (
        <div className="navbar" style={{ fontWeight: '600', fontSize: '20px' }}>
            Admin
            <button onClick={onToggleSidebar} style={{ backgroundColor: 'transparent', padding: '0'}}>
                <BarIcon />
            </button>
        </div>
    )
}

export default Navbar
