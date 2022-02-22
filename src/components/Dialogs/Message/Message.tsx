import React from 'react';
import s from './../Dialogs.module.css';

export type MessageItemPropsType = {
    message: string
    id: number
}

const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

export default Message;