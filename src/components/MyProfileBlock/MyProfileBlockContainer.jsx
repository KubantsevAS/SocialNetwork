import React from 'react';
import { connect } from 'react-redux';
import MyProfileBlock from './MyProfileBlock';
import { getUserPhoto } from '../../redux/authReducer';

class MyProfileBlockContainer extends React.Component {
    
    componentDidMount () {
        this.props.getUserPhoto(this.props.id)
    }
    componentDidUpdate () {
        this.props.getUserPhoto(this.props.id)
    }

    render() {
        return (
            <MyProfileBlock {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    userPhoto: state.auth.userPhoto
})

export default connect(mapStateToProps, {getUserPhoto})(MyProfileBlockContainer);
