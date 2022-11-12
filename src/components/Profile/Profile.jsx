import React from 'react'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
            <div className={classes.topImage}>
            </div>


            <div className={classes.profile__info}>
                <div className={classes.profile__avatar}>
                </div>
                <div className={classes.profile__description}>
                    <div className={classes.profile__name}>User Name: Mr Pugls</div>
                    <div className={classes.profile__age}>Age: 7</div>
                </div>
            </div>

            <MyPosts/>
            
        </div>
    );
}

export default Profile;