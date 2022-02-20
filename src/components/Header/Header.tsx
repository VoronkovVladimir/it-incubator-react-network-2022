import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://papik.pro/uploads/posts/2021-11/thumbs/1636144470_4-papik-pro-p-logotip-telegramma-foto-4.jpg"
                alt="logo"/>
        </header>
    );
};

export default Header;