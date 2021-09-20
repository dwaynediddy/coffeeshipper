import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import '../../style/nav.css'

import { SideBarData } from './SideBarData'

import logo from '../../images/logo.png'

const TopNav = () => {
    const [ showLinks, setShowLinks ] = useState(false)

    return (
        <div className="nav">
            <img src={logo} className="logo" alt="logo" />
            <ul className='menu-item'>
                    {SideBarData.map((item, index) => {
                            return (
                                <>
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                                </>
                            )
                        })}
                </ul>
                <button>
                    open
                </button>
        </div>
    )
}

export default TopNav
