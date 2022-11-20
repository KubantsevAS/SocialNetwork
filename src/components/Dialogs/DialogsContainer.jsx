import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {AddMessageActionCreator, updateNewMessageText} from './../../redux/dialogsReducer'


const DialogsContainer = (props) => {

    let state = props.store.getState();
    let messagesData = state.messagesPage.messagesData;
    let newMessageText = state.messagesPage.newMessageText;

    let dialogsElements = state.messagesPage.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava}/>));
    
    let messagesElements = state.messagesPage.messagesData.map(el => (<Message message={el.message} number={el.id}/>));

    let addMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageText(text));
    }

    return (
        <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements}
        addMessage={addMessage} onMessageChange={onMessageChange}
        messagesData = {messagesData}
        newMessageText = {newMessageText}
        />
    );
}

export default DialogsContainer;