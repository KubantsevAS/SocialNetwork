import { React, useState } from 'react';
import classes from './PostItem.module.css'
import defAva from './../../../../../redux/images/avatars/AvaDefault.png'

const PostItem = (props) => {

    const [likeCounter, setLikeCounter] = useState(Number(props.number));
    const addLike = () => {
        setLikeCounter(likeCounter => likeCounter + 1)
    };

    let name, ava;
    if (!props.profile) {
        name = 'Default User';
        ava = defAva;
    } else {
        name = props.profile.fullName;
        ava = props.profile.photos.small
    }
    return (
        <div className={classes.PostItem}>
            <div className={classes.postUpperPart}>
                <img src={ava || defAva} className={classes.postAvatar}></img>

                <div className={classes.postInner}>
                    <div className={classes.PostOwner}>{name}</div>
                    <div className={classes.PostText}>{props.message}</div>
                </div>

            </div>


            <div className={classes.LikePanel}>
                <div className={classes.LikeNumber}>{likeCounter}</div>
                <label htmlFor="likes" className={classes.Like} onClick={addLike}>Like</label>
                <button id="likes" className={classes.LikeButton}></button>
            </div>

        </div>
    )
}

export default PostItem;