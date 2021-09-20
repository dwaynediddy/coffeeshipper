import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import '../../style/nav.css'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import { SideBarData } from './SideBarData'

import logo from '../../images/logo.png'

const TopNav = () => {
    const [ inactive, setInactive ] = useState(false)

    return (
        <div className='nav'>
            <img src={logo} className="logo" alt="logo" />
            <div className='menu-item'>
                    {SideBarData.map((item, index) => {
                            return (
                                <>
                                <div key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </div>
                                </>
                            )
                        })}
                </div>
                    <div onclick={() => setInactive(!inactive)} className="toggle-button">
                        
                        {inactive ? 
                            <AiIcons.AiOutlineClose />
                        : 
                            <FaIcons.FaBars />
                        }
                    </div>
                <div className="menu-dropdown">
                        <div className={`dropdown ${inactive ? 'active' : ''}`}>
                        {SideBarData.map((item, index) => {
                                return (
                                    <div key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </div>
                                )
                            })}
                    </div>
                </div>
        </div>
    )
}

export default TopNav
