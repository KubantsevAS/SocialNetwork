import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (!newPostElement.current.value) {
            return
        }
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <AllPosts postsData={props.postsData}/>
            </div>
    )
}

export default MyPosts;