import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let dialogsElements = state.messagesPage.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava}/>));
    
    let messagesElements = state.messagesPage.messagesData.map(el => (<Message message={el.message} number={el.id}/>));

    return (
        <Dialogs/>
    );
}

export default DialogsContainer;