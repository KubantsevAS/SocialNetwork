import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import UserAvatar from './UserAvatar/UserAvatar';

const DialogItem = (props) => {
  return (
    <div className={classes.leftPanel}>
      <UserAvatar ava={props.ava} />

      <div className={classes.userName}>
        <NavLink to={'/dialogs/' + props.id} className={classes.user}>
          <div className={classes.contactItem}>{props.name}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
