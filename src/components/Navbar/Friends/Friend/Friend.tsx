import React from 'react';
import s from './Friend.module.css';

type PropsType = {
    name: string
}

const Friend: React.FC<PropsType> = (props) => {
    return (
        <div>
            <img className={s.avatar} src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg" alt="avatarFriend"/>
            <p className={s.friendName}>{props.name}</p>
        </div>
    );
};

export default Friend;