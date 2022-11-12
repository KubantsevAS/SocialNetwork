import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';
const MyPosts = () => {
    return (
        <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <AllPosts/>
            </div>
    )
}

export default MyPosts;