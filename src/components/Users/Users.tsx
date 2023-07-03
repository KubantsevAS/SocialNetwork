import React, { FC } from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';
import { UserType } from '../../types/types';

interface IUsersProps {
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalUsersCount: number;
  pageSize: number;
  users: UserType[];
  followingInProgress: number[];
  follow: () => void;
  unfollow: () => void;
  isAuth: boolean;
}

const Users: FC<IUsersProps> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
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
        isAuth={props.isAuth}
      />
    </div>
  );
};

export default Users;
