import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {

    constructor(props) {

        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} alt='ava' className={styles.userPhoto}></img>
                            </div>
                            <div>
                                {!user.followed
                                    ? <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                                    : <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>}

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
}




export default Users;