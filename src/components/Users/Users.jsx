import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        })
    }

    

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        

        return (
            <div>
                <div>
                    {pages.map(elem => {
                        return <span 
                        onClick={() => {this.onPageChanged(elem)}} 
                        className={this.props.currentPage === elem && styles.selectedPage}>{elem}</span>
                        })}
                    
                </div>
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