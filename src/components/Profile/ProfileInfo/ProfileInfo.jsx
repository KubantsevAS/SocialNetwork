import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import AdminAva from './../../../redux/images/avatars/adminAva.jpg'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile__info}>
            <div>
                <img src={props.profile.photos.large || AdminAva} className={classes.profile__avatar} alt='ava'/>
            </div>
            <div className={classes.profile__description}>
                <div className={classes.profile__name}>Full name: {props.profile.fullName}</div>
                <div className={classes.profile__age}>About me: {props.profile.aboutMe}</div>
                <ProfileStatus status={"Hello yo"}/>
            </div>
            
        </div>
    )
}

export default ProfileInfo;