import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import Friends from "./Friends/Friends";
import {FriendPropsType} from "../../redux/state";

type PropsType = {
    friendsState: Array<FriendPropsType>
}
const Navbar: React.FC<PropsType>= (props) => {
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
            <div>
                <h3>Friends</h3>
                <Friends friendsState={props.friendsState}/>
            </div>
        </nav>
    );
};

export default Navbar;