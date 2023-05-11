import React from 'react';
import PostItem from './PostItem/PostItem';
import styles from './AllPosts.module.css';

const AllPosts = (props) => {
  const postDataTags = props.postsData
    .slice()
    .reverse()
    .map((el) => (
      <PostItem
        message={el.message}
        number={el.number}
        key={el.id}
        profile={props.profile}
      />
    ));

  return <div className={styles.allPosts}>{postDataTags}</div>;
};

export default AllPosts;
