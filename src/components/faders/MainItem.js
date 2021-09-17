import React, { useEffect } from 'react'

import mainProduct from '../../images/logo2.png'

import "../../style/mainitem.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const productName = 'An animated element'
const productDescription = "Product Description lorum epsum"


const MainItem = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <div className="main-container">
            <div class="grids">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                    <div className='products' data-aos="fade-up">1</div>
                    <div className='products' data-aos="fade-up">2</div>
                    <div className='products' data-aos="fade-up">3</div>
            </div>
            <div className="wow fadeInRight">
                <img src={mainProduct} alt='product name' />
            </div>
        </div>
    )
}

export default MainItem
