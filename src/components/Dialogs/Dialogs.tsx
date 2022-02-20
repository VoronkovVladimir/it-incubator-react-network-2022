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
}
const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );

}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Viktor'} id={5}/>
                <DialogItem name={'Valera'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'HI'}/>
                <Message message={'How is your it'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;