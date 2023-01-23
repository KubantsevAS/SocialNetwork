import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Friends.module.css'
import defAva from './../../redux/images/avatars/AvaDefault.png'

export default function Friends(props) {

    return (
        <div className={styles.friendsPage}>
            <h2 className={styles.totalCount}>
                Friends total number {props.users.length}
            </h2>

            <input type={"search"} placeholder={"Enter user name"}></input>
            <div className={styles.friendsItemsInner}>
                {props.users.map(user => {
                    return (
                        <div className={styles.friendItem}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small || defAva} alt={user.id} className={styles.friendPhoto}></img>
                            </NavLink>
                            <div className={styles.friendDescr}>
                                <div className={styles.userName}>{user.name}</div>
                                <div>
                                    <span>New Message   </span>
                                    <span>Unfollow</span>
                                </div>
                                
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>

    )
}
