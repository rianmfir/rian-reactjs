import React from 'react'
import { Logo } from '../../assets'
import '../index.css'


export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
                <div class="container-md">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="" width="30" class="d-inline-block align-text-top rounded-circle bgcolor" />
                        <span className='ps-3'>rianmfir</span>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto text-white">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Project</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact"> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

