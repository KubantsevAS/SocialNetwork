import React from 'react'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <div className={classes.topImage}>
            </div>


            <ProfileInfo/>

            <MyPosts postsData={props.profilePage.postsData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.profilePage.newPostText}/>
            
        </div>
    );
}

export default Profile;