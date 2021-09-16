import React from 'react'
import LandingImg from '../images/cover.png'
import '../style/landing.css'

const Landing = () => {
    const content = ['lorum epsum dolor sit amet. ', <br />, 'lorum epsum dolor sit amet.']
    return (
        <div className="landing-container">
            <div className="landing-image">
                <img src={LandingImg} className="LandingImg" alt="Landing hustle cup" />
            </div>
            <div className="content-wrapper">
                <h2 className="landing-header">Brand Name</h2>
                    <p>{content}</p>
                <button>Start Shopping</button>
            </div>
        </div>
    )
}

export default Landing
