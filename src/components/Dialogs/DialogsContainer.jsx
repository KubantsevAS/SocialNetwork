import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { AddMessageActionCreator, updateNewMessageText } from './../../redux/dialogsReducer'
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let messagesData = state.messagesPage.messagesData;
                let newMessageText = state.messagesPage.newMessageText;

                let dialogsElements = state.messagesPage.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava} />));

                let messagesElements = state.messagesPage.messagesData.map(el => (<Message message={el.message} number={el.id} />));

                let addMessage = () => {
                    store.dispatch(AddMessageActionCreator())
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageText(text));
                }

                return (
                    <Dialogs dialogsElements={dialogsElements} messagesElements={messagesElements}
                        addMessage={addMessage} onMessageChange={onMessageChange}
                        messagesData={messagesData}
                        newMessageText={newMessageText}
                    />)
            }}
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;