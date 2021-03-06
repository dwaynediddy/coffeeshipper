import React, { useState } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

import { SideBarData } from './SideBarData'

import '../../style/sidemenu.css'

import * as AiIcons from 'react-icons/ai'

import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'

const SideMenu = () => {

    const [ inactive, setInactive ] = useState(false)

    return (
        <div className={`side-menu ${inactive ? 'inactive' : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div onClick = {() => setInactive(!inactive)} className='toggle-menu-btn'>
                    {inactive ? <AiIcons.AiOutlineArrowRight />  : <AiIcons.AiOutlineArrowLeft />}
                </div>
            </div>
            <div className='divider'></div>
            <div className='main-menu'>
                <ul className='menu-item'>
                    {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </div>
            <div className='side-menu-footer'>
                <div className='avatar'>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className='user-info'> 
                    <h5>user name</h5>
                    <p>user@emailadress</p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
