import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import classes from './FriendsItems.module.css'

const FriendsItems = (props) => {

    let Friends = props.friendsList.map(el => (<FriendItem name={el.name} ava={el.ava}/>))
    return (
        <div className={classes.friendsPanel}>
            {Friends}
        </div>
    )
}

export default FriendsItems;