import React from 'react';
import classesHeader from'./Header.module.css';

const Header = () => {
    return (
        <header className = {classesHeader.Header}>
            <img className= {classesHeader.Header__img} src="https://ru-drive.com/local/templates/ru-drive/images/ru-drive-logo.svg"></img>
        </header>
    );
}

export default Header;