import React, { useEffect } from 'react'

// import { ProductData } from '../products/Productdata'

import mainProduct from '../../images/logo2.png'

import "../../style/mainitem.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const productName = 'Product'
const productDescription = "Product Description lorum epsum"


const MainItem = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <div className="main-container">
            <div class="grids">
                    <div className="products-one">
                        <div className='products-data' data-aos="fade-right">
                            <h1 className='productName'>{productName}</h1>
                            <p className='productDescription'>{productDescription}</p>
                            <button className='productBtn'>shop</button>
                        </div>
                        <div className='products-image' data-aos="fade-left">
                            <img src={mainProduct} alt='product name' />
                        </div>
                    </div>
                    <div className="products">
                        <div className='products-image' data-aos="fade-right">
                            <img src={mainProduct} alt='product name' />
                        </div>
                        <div className='products-data' data-aos="fade-left">
                            <h1 className='productName'>{productName}</h1>
                            <p className='productDescription'>{productDescription}</p>
                            <button>shop</button>
                        </div>
                    </div>
                    <div className="products">
                        <div className='products-data' data-aos="fade-right">
                            <h1 className='productName'>{productName}</h1>
                            <p className='productDescription'>{productDescription}</p>
                            <button>shop</button>
                        </div>
                        <div className='products-image' data-aos="fade-left">
                            <img src={mainProduct} alt='product name' />
                        </div>
                    </div>
            </div>
            <div className="wow fadeInRight">
            </div>
        </div>
    )
}

export default MainItem
