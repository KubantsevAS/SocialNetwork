import {React, useState} from 'react';
import classes from './PostItem.module.css'

const PostItem = (props) => {
    
    const [likeCounter, setLikeCounter] = useState(Number(props.number));
    const addLike = () => {
        setLikeCounter(likeCounter => likeCounter + 1)
    };

    return (
        <div className={classes.PostItem}>
            <div className={classes.PostUpperPart}>
                
                <div className={classes.postAvatar}></div>


                <div className={classes.PostInner}>
                    <div className={classes.PostOwner}>Mr Pugles</div>
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