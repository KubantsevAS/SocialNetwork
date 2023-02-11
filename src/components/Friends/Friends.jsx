import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Friends.module.css'
import defAva from './../../redux/images/avatars/AvaDefault.png'
//import searchIcon from './../../redux/images/icons/search.png'

export default function Friends(props) {

    return (
        <div className={styles.friendsPage}>
            <div className={styles.searchBlock}>
                <h2 className={styles.totalCount}>
                    Friends total number: {props.users.length}
                </h2>

                {/* <div className={styles.inputSearch}>
                    <input type={"search"} placeholder={"Enter user name"}></input>
                    <label htmlFor="searchBtn" className={styles.labelBtnSr}>
                        <img src={searchIcon} alt={'serach'} className={styles.btnSrIcon}></img>
                    </label>
                    <button id={"searchBtn"} className={styles.btnSr}></button>
                </div> */}
                
            </div>


            <div className={styles.friendsItemsInner}>
                {props.users.map(user => {
                    return (
                        <div className={styles.friendItem} key={user.id}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small || defAva} alt={user.id} className={styles.friendPhoto}></img>
                            </NavLink>
                            <div className={styles.friendDescr}>
                                <NavLink to={'/profile/' + user.id} className={styles.userName}>
                                    <div className={styles.userNameContainer}>{user.name}</div>
                                </NavLink>
                                <div className={styles.userStatus}>{user.status || 'No status'}</div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>

    )
}
