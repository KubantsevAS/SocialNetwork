import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyProfileBlock.module.css'
import defAva from '../../redux/images/avatars/AvaDefault.png'
import login from '../../redux/images/icons/login1.png'

const MyProfileBlock = (props) => {

    let linkNav, text;
    if (props.isAuth) {
        [linkNav, text] = [`/profile/${props.id}`, props.login];
    } else {
        [linkNav, text] = [`/login`, 'Log in']
    }

    return (
        <div className={styles.myInfo}>
            <NavLink to={linkNav} className={styles.myLinkCommon}>
                <div className={styles.photoField}><img className={props.isAuth? styles.userPhoto :styles.loginPhoto} alt={props.id} src={props.isAuth ? defAva : login}></img></div>
                <div>{text}</div>
            </NavLink>
        </div>
    );
}

export default MyProfileBlock;
