import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import classes from './FriendsItems.module.css'

const FriendsItems = (props) => {
    
    let Friends = props.store.getState().friendsPanel.friendsList.map(el => (<FriendItem name={el.name} ava={el.ava} />))
    
    return (
        <div>
            <h3>Friends</h3>
            <div className={classes.friendsPanel}>
                {Friends}
            </div>
        </div>

    )
}

export default FriendsItems;