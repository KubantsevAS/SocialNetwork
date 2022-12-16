import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';
import NewPostForm from './NewPostForm/NewPostForm';


const MyPosts = (props) => {
    
    return (
        <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <NewPostForm addNewPost={props.addPost}/>
                <AllPosts postsData={props.profilePage.postsData}/>
            </div>
    )
}

export default MyPosts;