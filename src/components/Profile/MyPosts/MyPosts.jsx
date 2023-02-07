import React from 'react';
import classes from './MyPosts.module.css'
import AllPosts from './AllPost/AllPosts';
import NewPostForm from './NewPostForm/NewPostForm';


class MyPosts extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props && nextState !== this.state;
    // }

    render () {
        return (
            <div className={classes.my__posts}>
                <div className={classes.myPostsTitle}>Posts section</div>
                <NewPostForm addNewPost={this.props.addPost} />
                <AllPosts postsData={this.props.profilePage.postsData} profile={this.props.profilePage.profile}/>
            </div>
        )}
    }



export default MyPosts;