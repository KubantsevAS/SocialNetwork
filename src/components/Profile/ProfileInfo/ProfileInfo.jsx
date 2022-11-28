import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profile__info}>
            <div className={classes.profile__avatar}>
                <img src={props.profile.photos.large} alt='ava'/>
            </div>
            <div className={classes.profile__description}>
                <div className={classes.profile__name}>User Name: Mr Pugls</div>
                <div className={classes.profile__age}>Age: 7</div>
            </div>
        </div>
    )
}

export default ProfileInfo;