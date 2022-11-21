import React from 'react';
import classes from './PrintMessage.module.css'

const PrintMessage = (props) => {
    let newPost = React.createRef();

    let onAddMessage = () => {
        if (!newPost.current.value) {
            return
        }  
        props.addMessage();
    }

    let onConMessageChange = () => {
        let text = newPost.current.value;
        props.onMessageChange(text);
    }



    return (
        <div className={classes.printAreaBorder}>
            <div className={classes.printArea}>
                <textarea className={classes.newMessage} ref={newPost} value={props.newMessageText} onChange={onConMessageChange}/>
                <label htmlFor='post' className={classes.postBtn} onClick={onAddMessage}>
                    <div className={classes.Arrow}></div>
                </label>
                <button className={classes.btn}></button>
            </div>
        </div>

    )
}

export default PrintMessage;