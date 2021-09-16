import React from 'react'
import "animate.css"

import "../../style/mainitem.css"


import mainProduct from '../../images/logo2.png'

const ThirdItem = () => {
    return (
        <div className="third-container">
            <div className="animate__animated animate__fadeInLeft">
                <h1>An animated element</h1>
                <p>An animated element</p>
            </div>
            <div className="animate__animated animate__fadeInRight">
                <img src={mainProduct} alt='product name' />
            </div>
        </div>
    )
}

export default ThirdItem
