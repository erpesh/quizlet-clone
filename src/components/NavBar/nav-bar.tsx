import React, { useState } from 'react'
import Header from './Header/header'
import SideBar from './SideBar/side-bar'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <>
            <Header toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default NavBar