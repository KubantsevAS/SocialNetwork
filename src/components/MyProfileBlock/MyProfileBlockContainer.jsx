import React from 'react';
import { connect } from 'react-redux';
import MyProfileBlock from './MyProfileBlock';
import { getUserInfo } from '../../redux/profileReducer';

class MyProfileBlockContainer extends React.Component {

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
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserInfo})(MyProfileBlockContainer);
