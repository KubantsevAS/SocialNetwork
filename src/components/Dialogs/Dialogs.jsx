import React from 'react';
import classes from './Dialogs.module.css';
import PrintMessage from './PrintMessage/PrintMessage';


const Dialogs = (props) => {

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogItems}>

                {props.dialogsElements}
                
            </div>
            <div className={classes.rightPanel}>
                
                <div className={classes.messagesPanel}>
                    {props.messagesElements}
                </div>

                <PrintMessage 
                
                newMessageText={props.newMessageText}
                addMessage={props.addMessage} 
                onMessageChange={props.onMessageChange}
                />
                
                
            </div>
        </div>
    );
}

export default Dialogs;