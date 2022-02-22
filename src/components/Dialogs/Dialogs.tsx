import React from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessageItemPropsType} from "./Message/Message";

type PropsType = {
    dialogs: Array<DialogItemPropsType>,
    messages: Array<MessageItemPropsType>
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    const messagesElement = props.messages.map(message => <Message message={message.message} id={message.id}/>)

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