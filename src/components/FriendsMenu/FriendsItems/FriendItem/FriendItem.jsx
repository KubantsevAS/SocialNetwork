import React from 'react';
import './FriendItem.css'

const FriendItem = (props) => {
    return (
        <div>
            <div className={`friendAvatar photo${props.ava}`}></div>
            <div className='friendName'>{props.name}</div>
        </div>
    )
}

export default FriendItem;