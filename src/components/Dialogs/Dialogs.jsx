import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={classes.user}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id : 1, name: 'Leo'},
        {id : 2, name: 'Vasily'},
        {id : 3, name: 'Gotfried'},
        {id : 4, name: 'Mark'},
        {id : 5, name: 'Gasdro'},
        {id : 6, name: 'Rodri'}
    ];  

    let dialogsElements = dialogsData.map(el => (<DialogItem name={el.name} id={el.id}/>))
    
    let messagesData = [
        {id : 1, message : 'Hey'},
        {id : 2, message : 'Hello'},
        {id : 3, message : 'And that how it started'},
        {id : 4, message : 'Anyway what it takes'},
    ];

    let messagesElements = messagesData.map(el => (<Message message={el.message}/>));

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