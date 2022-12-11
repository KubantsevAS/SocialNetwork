import React from 'react';
import classes from './Dialogs.module.css';
import PrintMessage from './PrintMessage/PrintMessage';
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {

if (props.isAuth === false) return <Navigate to={'/login'} />;
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
                onMessageChange={props.updateNewMessageText}
                />
                
                
            </div>
        </div>
    );
}

export default Dialogs;