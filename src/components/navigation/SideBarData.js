import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'


export const SideBarData = [
    {
        title: 'home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-home',
    },
    {
        title: 'Shop',
        path: '/shop',
        icon: <AiIcons.AiOutlineShopping />,
        cName: 'nav-shop',
    },
    {
        title: 'contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineContacts />,
        cName: 'nav-contact',
    },
    {
        title: 'register/sign in',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-login',
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-cart',
    },
]