import React from 'react';

import classes from './FriendsItems.module.css'

const FriendsItems = (props) => {
    
    
    
    return (
        <div>
            <h3>Friends</h3>
            <div className={classes.friendsPanel}>
                {props.Friends}
            </div>
        </div>

    )
}

export default FriendsItems;