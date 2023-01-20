import React from 'react';
import styles from './User.module.css';
import defAva from './../../../redux/images/avatars/AvaDefault.png'
import { NavLink } from 'react-router-dom';
import ButtonFollow from '../../Common/ButtonFollow/ButtonFollow';

const User = (props) => {
    return (
        <div >
            {
                props.users.map(user => <div key={user.id} className={styles.userCard}>
                    <span>

                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small || defAva} alt='ava' className={styles.userPhoto} />
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
    );
}

export default User;