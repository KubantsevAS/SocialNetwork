import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import { addMessage} from './../../redux/dialogsReducer'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        messagesPage : state.messagesPage,
        dialogsElements : state.messagesPage.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava} key={el.id}/>)),
        messagesElements : state.messagesPage.messagesData.map(el => (<Message message={el.message} number={el.id} key={el.id}/>)),
    }
}



export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
    ) (Dialogs);