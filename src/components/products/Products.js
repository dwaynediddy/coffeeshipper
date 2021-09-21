import React from 'react'

import { ProductData } from './Productdata'

const Products = () => {
    return (
        <div>
            {ProductData.map(product => {
                <div item key={product.id}>
                    <Product />
                </div>
            })}
            
        </div>
    )
}

export default Products
