import React, { useState } from 'react'
import '../../style/sidemenu.css'

import * as AiIcons from 'react-icons/ai'

import logo from '../../images/logo.png'

const SideMenu = () => {

    const [ inactive, setInactive ] = useState(false)

    return (
        <div className={`side-menu ${inactive ? 'inactive' : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div onClick = {() => setInactive(!inactive)} className='toggle-menu-btn'>
                    <AiIcons.AiOutlineArrowLeft />
                </div>
            </div>
            <div className='divider'></div>
        </div>
    )
}

export default SideMenu
