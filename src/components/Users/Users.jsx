import React from 'react'
import styles from './Users.module.css';
import defAva from './../../images/AvaDefault.jpg'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (

        <div>
            <div>
                {pages.map(elem => {
                    return <span 
                    onClick={() => {props.onPageChanged(elem)}} 
                    className={props.currentPage === elem && styles.selectedPage}>{elem}</span>
                    })}
                
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}><img src={user.photos.large || defAva} alt='ava' className={styles.userPhoto}/></NavLink>
                        </div>
                        <div>
                            {!user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        null,
                                        { 
                                            withCredentials: true,
                                            headers: {"API-KEY" : "bff11a72-6534-45d6-9852-f7e15e778155"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                }}>Follow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        { 
                                            withCredentials: true,
                                            headers: {"API-KEY" : "bff11a72-6534-45d6-9852-f7e15e778155"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                }}>unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;