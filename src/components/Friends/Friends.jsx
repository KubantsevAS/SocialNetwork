import React from 'react'
import styles from './Friends.module.css'

export default function Friends(props) {

    return (

        <div>
            {props.users.map(user => {
                return (
                    <div>
                        <img src={user.photos.small} alt={user.id}></img>
                        <div>
                            <div></div>{user.name}  
                            <div>Status: </div>{user.status}
                        </div>
                        
                    </div>
                )
            })}
        </div>

    )
}
