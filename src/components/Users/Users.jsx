import React from 'react'
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {

    return (

        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                pageSize={pageSize}
                portionSize={10}
            />
            
            <User
                users={props.users}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        </div>
    )
}

export default Users;