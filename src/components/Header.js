import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Avatar } from '@material-ui/core';
import logo from '../resources/images/perfil.png'

export default function Header() {
    return (
        <>
            <a href="# " className="scrolltop" id="scroll-top">
                <i className="scrolltop__icon">
                    <ExpandLessIcon/>
                </i>
            </a>
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <div className="nav__toggle" id="nav-toggle">
                        <MenuIcon/>
                    </div>

                    <div className="nav__name">
                        <p>Brayssen Torrejon Cerna</p>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link active-link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">Services</a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">Portfolio</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">Contactme</a>
                            </li>
                            <li>
                                <i className="change-theme" id="theme-button"><Brightness2Icon/></i>
                            </li>
                        </ul>
                    </div>
                    <Avatar src={logo}></Avatar>

                </nav>
            </header>
        </>
    )
}
