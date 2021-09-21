import React from 'react'
import Logo from '../images/logo.png'

import { FaInstagram } from 'react-icons/fa'

// import Logo from '../images/logo2.png'

import '../style/footer.css'

const goToInstagram = () => {
    window.open("https://www.instagram.com/kepac.coffee/")
}

const Footer = () => {
    return (
        <div className="footer-content">
            <ul className="footer-list">
            <img src={Logo} alt="Logo" />
                {/* <Link Link to='navbar' smooth={true} duration={500}>
                    <img src={Logo} className="logo" alt="Logo"  />
                </Link> */}
                <li>email@mail.com</li>
                <li>123 456 789</li>
                <li className="instagramIcon"><FaInstagram onClick={goToInstagram} /></li>
            </ul>
            
        </div>
    )
}

export default Footer
