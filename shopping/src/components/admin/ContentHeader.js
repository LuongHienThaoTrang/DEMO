import React from 'react';

function ContentHeader({ onToggleModal, onAddProduct }) {

    const handleClick = () => {
        onToggleModal()
    }

    return (
        <>
            <div className="content-header">
                <h3>Products</h3>
                <button className="btn primary-btn" onClick={handleClick}>+ Add</button>
            </div>
        </>
    )
}

export default ContentHeader