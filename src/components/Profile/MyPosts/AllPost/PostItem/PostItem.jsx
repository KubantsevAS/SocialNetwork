import React from 'react';
import classes from './../../../Profile.module.css'

const PostItem = () => {
    return (
        <div className='PostItem'>
                        <div className={classes.postAvatar}></div>
                        <div className='PostText'>Lorem ipsum dolor sit.</div>
        </div>
    )
}

export default PostItem;