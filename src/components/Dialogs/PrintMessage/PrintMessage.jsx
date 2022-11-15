import React from 'react';
import classes from './PrintMessage.module.css'

const PrintMessage = (props) => {

    let newPost = React.createRef();

    let addMessage = () => {
        let text = newPost.current.value;
        if (!newPost.current.value) {
            return
        }
        props.addMessage(text);
    }

    let onMessageChange = () => {
        let text = newPost.current.value;
        props.updateNewMessageText(text);
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