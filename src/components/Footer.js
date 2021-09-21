import React from 'react'
import Logo from '../images/logo.png'

import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'


// import Logo from '../images/logo2.png'

import '../style/footer.css'

const goToInstagram = () => {
    window.open("https://www.instagram.com/kepac.coffee/")
}
const goToFaceBook = () => {
    window.open("https://www.instagram.com/kepac.coffee/")
}
const goToTwitter = () => {
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
                {/* <li>email@mail.com</li> */}
                <li className="icon"><FaIcons.FaInstagram onClick={goToInstagram} /></li>
                <li className="icon"><AiIcons.AiOutlineFacebook onClick={goToFaceBook} /></li>
                <li className="icon"><FiIcons.FiTwitter onClick={goToTwitter} /></li>
                {/* <li>123 456 789</li> */}
            </ul>
            
        </div>
    )
}

export default Footer
