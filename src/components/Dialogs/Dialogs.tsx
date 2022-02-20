import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={({isActive}) => (isActive ? s.active : s.dialog)}>{props.name}</NavLink>
        </div>
    );
}

type MessageItemPropsType = {
    message: string
    id: number
}
const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );

}
const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData = [
        {id: 1, message: 'HI'},
        {id: 2, message: 'How is your it'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
};

export default Dialogs;