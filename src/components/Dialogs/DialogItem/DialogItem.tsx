import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={({isActive}) => (isActive ? s.active : s.dialog)}>
                <img className={s.avatar} src="https://user-life.com/uploads/posts/2020-03/1584366922_1.png" alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;