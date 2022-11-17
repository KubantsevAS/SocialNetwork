import React from 'react';
import classes from './PrintMessage.module.css'
import {AddMessageActionCreator, updateNewMessageText} from './../../../redux/dialogsReducer'

const PrintMessage = (props) => {

    let newPost = React.createRef();

    let addMessage = () => {
        if (!newPost.current.value) {
            return
        }  
        props.dispatch(AddMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewMessageText(text));
    }



    return (
        <div className={classes.printAreaBorder}>
            <div className={classes.printArea}>
                <textarea className={classes.newMessage} ref={newPost} value={props.newMessageText} onChange={onMessageChange}/>
                <label for='post' className={classes.postBtn} onClick={addMessage}>
                    <div className={classes.Arrow}></div>
                </label>
                <button className={classes.btn}></button>
            </div>
        </div>

    )
}

export default PrintMessage;