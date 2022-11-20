import React from 'react';
import StoreContext from '../../../StoreContext';
import FriendItem from './FriendItem/FriendItem';
import classes from './FriendsItems.module.css'

const FriendsItems = (props) => {

    
    return (
        <StoreContext.Consumer>{
            (store) => {
                let Friends = store.getState().friendsPanel.friendsList.map(el => (<FriendItem name={el.name} ava={el.ava} />))
                return (
                    <div className={classes.friendsPanel}>
                        {Friends}
                    </div>)
            }}
        </StoreContext.Consumer>

    )
}

export default FriendsItems;