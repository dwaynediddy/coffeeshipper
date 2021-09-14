import React from 'react'
import '../../style/nav.css';

const TopNav = () => {
    return (
        <div className="nav">
            <div className="logo">logo</div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
                <div className="cart">Cart</div>
        </div>
    )
}

export default TopNav
