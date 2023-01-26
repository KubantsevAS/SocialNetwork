import React from 'react';
import classes from '../Profile.module.css'
import AllPosts from './AllPost/AllPosts';
import NewPostForm from './NewPostForm/NewPostForm';


class MyPosts extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props && nextState !== this.state;
    // }

    render () {
        return (
            <div className={classes.my__posts}>
                <h1>My Posts</h1>
                <NewPostForm addNewPost={this.props.addPost} />
                <AllPosts postsData={this.props.profilePage.postsData} />
            </div>
        )}
    }



export default MyPosts;