import React from 'react'
import "animate.css"

import mainProduct from '../../images/logo2.png'

import "../../style/mainitem.css"

const productName = 'An animated element'
const productDescription = "Product Description lorum epsum"


const MainItem = () => {
    return (
        <div className="main-container">
            <div className="animate__animated animate__fadeInLeft">
                <h1>{productName}</h1>
                <br />
                <p>{productDescription}</p>
            </div>
            <div className="animate__animated animate__fadeInRight">
                <img src={mainProduct} alt='product name' />
            </div>
        </div>
    )
}

export default MainItem
