import React from 'react'
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.topImage}>
                {/* <img src="https://pbs.twimg.com/media/BowtSahIAAATtcn.jpg"></img> */}
            </div>


            <div className={classes.profile__info}>
                <div className={classes.profile__avatar}>
                    {/* <img src="https://avatarfiles.alphacoders.com/813/81325.jpg"></img> */}
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