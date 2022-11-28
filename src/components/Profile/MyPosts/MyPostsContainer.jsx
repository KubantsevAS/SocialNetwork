import {addPost, updateNewPostText} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}

export default connect (mapStateToProps, {updateNewPostText, addPost}) (MyPosts);

