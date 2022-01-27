import React, { useState } from 'react'
import { Logo } from '../../assets'
import '../../index.css'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY > 65) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={`navbar navbar-expand-md navbar-dark ${navbar ? 'sticky-top bg-Secondary shadow' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={Logo} alt="" width="30" className="d-inline-block align-text-top rounded-circle" />
                    <span className='ps-3'>rianmfir</span>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto text-center">
                        <li>
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#projects">Project</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#contact"> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar








