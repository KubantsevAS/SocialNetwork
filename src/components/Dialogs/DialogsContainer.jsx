import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import { AddMessageActionCreator, updateNewMessageText } from './../../redux/dialogsReducer'



let mapStateToProps = (state) => {
    return {
        messagesPage : state.messagesPage,
        dialogsElements : state.messagesPage.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava} key={el.id}/>)),
        messagesElements : state.messagesPage.messagesData.map(el => (<Message message={el.message} number={el.id} key={el.id}/>)),
        newMessageText : state.messagesPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage : () => {
            dispatch(AddMessageActionCreator())
        },
        onMessageChange : (text) => {
            dispatch(updateNewMessageText(text))
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;