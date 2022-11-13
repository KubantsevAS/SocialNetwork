import React from 'react';
import PostItem from './PostItem/PostItem';

const AllPosts = (props) => {

    
    

    let postDataTags = props.postsData.map(el => ( <PostItem message={el.message} number={el.number} key={el.id}/>))


    return (
        <div className='AllPosts'>

            {postDataTags}
            
        </div>
    )
}

export default AllPosts;