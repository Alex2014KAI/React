import React from 'react';
import classesNav from './Nav.module.css';

const Navbar = () => {
    return (
        <nav className={classesNav.nav}>
            <div> <a className= {classesNav.nav__link} href='#'> Profile </a> </div>
            <div> <a className= {classesNav.nav__link} href='#'> Messege</a> </div>
            <div> <a className= {classesNav.nav__link} href='#'> News </a> </div>
            <div> <a className= {classesNav.nav__link} href='#'> Music </a> </div>
            <div> <a className= {classesNav.nav__link} href='#'> Settings </a> </div>
        </nav>
    );
};

export default Navbar;