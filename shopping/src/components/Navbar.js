
function Navbar({ onToggleSidebar }) {
    return (
        <div className="navbar">
            <button onClick={onToggleSidebar}>
                OPEN
            </button>
        </div>
    )
}

export default Navbar