import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer'


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        if (!newPostElement.current.value) {
            return
        }
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <div>
                    <textarea ref={newPostElement} value={props.state.profilePage.newPostText} onChange={onPostChange}/>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <AllPosts postsData={props.state.profilePage.postsData}/>
            </div>
    )
}

export default MyPosts;