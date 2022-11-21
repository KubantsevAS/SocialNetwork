import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange : (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost : () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;