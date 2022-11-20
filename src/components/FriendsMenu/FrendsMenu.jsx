import React from 'react';
import FriendsItems from './FriendsItems/FriendsItems';

const FriendsMenu = (props) => {


    return (
        <div>
            <h3>Friends</h3>
            <FriendsItems 
                //friendsList={props.friendsList}
            />
        </div>
    )
}

export default FriendsMenu;