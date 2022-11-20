import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';


const MyPosts = (props) => {
    
    let newPostElement = React.createRef();

    let onAddPost = () => {
        if (!newPostElement.current.value) {
            return
        }
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <div>
                    <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={onPostChange}/>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <AllPosts postsData={props.profilePage.postsData}/>
            </div>
    )
}

export default MyPosts;