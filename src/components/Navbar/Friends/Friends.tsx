import React from 'react';
import Friend from "./Friend/Friend";
import s from './Friends.module.css';
import {FriendPropsType} from "../../../redux/state";

type PropsType = {
    friendsState: Array<FriendPropsType>
}

const Friends: React.FC<PropsType> = (props) => {

    const friendsElements = props.friendsState.map(friend => <Friend name={friend.name} /> )
    return (
        <div className={s.friendsBox}>
            {friendsElements}
        </div>
    );
};

export default Friends;