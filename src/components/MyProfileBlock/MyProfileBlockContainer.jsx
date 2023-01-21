import React from 'react';
import { connect } from 'react-redux';
import MyProfileBlock from './MyProfileBlock';

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
})

export default connect(mapStateToProps)(MyProfileBlockContainer);
