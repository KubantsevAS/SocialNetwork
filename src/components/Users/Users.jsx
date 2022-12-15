import React from 'react'
import styles from './Users.module.css';
import defAva from './../../redux/images/avatars/AvaDefault.png'
import { NavLink } from 'react-router-dom';
import ButtonFollow from '../Common/ButtonFollow/ButtonFollow';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        //let newPages = pages.slice(-10, pages.length);
    return (

        <div>
            <div className={styles.pages}>
                {pages.map(elem => {
                    return <div
                    onClick={() => {props.onPageChanged(elem)}} 
                    className={props.currentPage === elem ? styles.selectedPage : styles.pageItem}>{elem}</div>
                    })}
                
            </div>
            {
                props.users.map(user => <div key={user.id} className={styles.userCard}>
                    <span>

                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.large || defAva} alt='ava' className={styles.userPhoto}/>
                            </NavLink>
                        </div>

                        <ButtonFollow
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            userId={user.id}
                            user={user}
                        />
                    </span>

                    <span>
                        <span>
                            <div>Name: {user.name}</div>
                            <div>Status: {user.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;