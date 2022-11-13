import React from 'react';
import './Message.css'

const Message = (props) => {

    

    return (
        <div className={`message ${props.number % 2 !== 0 ? 'message' : 'right'}`}>
            {props.message}
        </div>
    )
}

export default Message;