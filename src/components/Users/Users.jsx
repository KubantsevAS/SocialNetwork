import React from 'react'
import styles from './Users.module.css';
import defAva from './../../images/AvaDefault.jpg'
import { NavLink } from 'react-router-dom';

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
                                ? <button onClick={() => { props.follow(user.id) }}>Follow</button>
                                : <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>}

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