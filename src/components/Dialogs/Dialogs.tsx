import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessageItemPropsType} from "./Message/Message";
import {DialogPropsType, MessagePropsType} from "../../redux/state";

type PropsType = {
    // dialogs: Array<DialogItemPropsType>,
    // messages: Array<MessageItemPropsType>
    dialogsState: {
        messages: Array<MessagePropsType>
        dialogs: Array<DialogPropsType>
    }
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogsElements = props.dialogsState.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messagesElement = props.dialogsState.messages.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;