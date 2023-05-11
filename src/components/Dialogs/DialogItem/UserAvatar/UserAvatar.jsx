import React from 'react';
import './UserAvatar.css';

const UserAvatar = (props) => {
  return <div className={`userAvatar photo${props.ava}`}></div>;
};

export default UserAvatar;
