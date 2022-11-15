import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        if (!newPostElement.current.value) {
            return
        }
        props.dispatch({ type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText : text});
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