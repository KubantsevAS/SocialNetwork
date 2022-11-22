import React from 'react';
import styles from './Users.module.css'
import axios from 'axios';

console.log(axios);

const Users = (props) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            
            props.setUsers(response.data.items)
        })
        
    }}

    // [
    //     { id: 1, photoUrl: 'https://img.freepik.com/premium-vector/sweety-pug-avatar_79416-88.jpg?w=2000', followed: false, fullName: 'Mr Pugls', status: 'I am a boss', location: { city: 'Saint-Petersburg', country: 'Russia' } },
    //     { id: 2, photoUrl: '../../redux/images/avatars/avatar6.jpg', followed: true, fullName: 'Rodri', status: 'Red sun in the sky', location: { city: 'Beijing', country: 'China' } },
    //     { id: 3, photoUrl: '../../redux/images/avatars/avatar4.jpg', followed: false, fullName: 'Gotfried', status: 'Winter is coming', location: { city: 'Leipzig', country: 'Germany' } },
    // ]
    


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt='ava' className={styles.userPhoto}></img>
                        </div>
                        <div>
                            {!user.followed 
                                ? <button onClick={ () => {props.follow(user.id)} }>Follow</button> 
                                : <button onClick={ () => {props.unfollow(user.id)} }>unfollow</button>}
                            
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