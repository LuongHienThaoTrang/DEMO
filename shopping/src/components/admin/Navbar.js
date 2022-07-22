import BarIcon from "../assets/icons/bars-solid"

function Navbar({ onToggleSidebar }) {
    return (
        <div className="navbar">
            NAVBAR
            <button onClick={onToggleSidebar}>
                <BarIcon />
            </button>
        </div>
    )
}

export default Navbar