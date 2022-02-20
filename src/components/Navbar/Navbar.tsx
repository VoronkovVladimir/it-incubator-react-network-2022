import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={({isActive}) => (isActive ? s.active : s.item)}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={({isActive}) => (isActive ? s.active : s.item)}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={({isActive}) => (isActive ? s.active : s.item)}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={({isActive}) => (isActive ? s.active : s.item)}>Music</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;