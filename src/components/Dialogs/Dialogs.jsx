import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    

    let dialogsElements = props.dialogsData.map(el => (<DialogItem name={el.name} id={el.id}/>))
    
    let messagesElements = props.messagesData.map(el => (<Message message={el.message}/>));

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogItems}>

                {dialogsElements}
                
            </div>
            <div className={classes.messagesItems}>
                
                {messagesElements}
                
            </div>
        </div>
    );
}

export default Dialogs;