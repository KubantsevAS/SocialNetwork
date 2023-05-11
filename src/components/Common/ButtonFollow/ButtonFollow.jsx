import React from 'react';
import styles from './ButtonFollow.module.css';

const ButtonFollow = (props) => {
  return (
    <div>
      <div className={styles.btn}>
        {!props.user.followed ? (
          <button
            className={styles.btn__blue}
            disabled={props.followingInProgress.some(
              (id) => id === props.userId
            )}
            onClick={() => {
              props.follow(props.userId);
            }}
          >
            Follow
          </button>
        ) : (
          <button
            className={styles.btn__red}
            disabled={props.followingInProgress.some(
              (id) => id === props.userId
            )}
            onClick={() => {
              props.unfollow(props.userId);
            }}
          >
            Unfollow
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonFollow;
