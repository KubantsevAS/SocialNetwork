import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={classes.user}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;