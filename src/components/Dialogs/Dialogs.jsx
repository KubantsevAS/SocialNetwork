import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import PrintMessage from './PrintMessage/PrintMessage';


const Dialogs = (props) => {

    

    let dialogsElements = props.state.dialogsData.map(el => (<DialogItem name={el.name} ava={el.ava}/>))
    
    let messagesElements = props.state.messagesData.map(el => (<Message message={el.message} number={el.id}/>));

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogItems}>

                {dialogsElements}
                
            </div>
            <div className={classes.rightPanel}>
                
                <div className={classes.messagesPanel}>
                    {messagesElements}
                </div>

                <PrintMessage/>
                
                
            </div>
        </div>
    );
}

export default Dialogs;