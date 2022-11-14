import React from 'react';
import classes from './PrintMessage.module.css'

const PrintMessage = () => {

    let newPost = React.createRef();

    const Print = () => {
        let text = newPost.current.value;

        alert(text);
    }

    return (
        <div className={classes.printAreaBorder}>
            <div className={classes.printArea}>
                <textarea className={classes.newMessage} ref={newPost}></textarea>
                <label for='post' className={classes.postBtn} onClick={Print}>
                    <div className={classes.Arrow}></div>
                </label>
                <button className={classes.btn}></button>
            </div>
        </div>

    )
}

export default PrintMessage;