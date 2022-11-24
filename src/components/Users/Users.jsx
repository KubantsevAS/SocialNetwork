import React from 'react'
import styles from './Users.module.css';

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
                            <img src={user.photoUrl} alt='ava' className={styles.userPhoto}></img>
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