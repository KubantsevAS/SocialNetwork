import React from 'react'
import { connect } from 'react-redux'
import LoginReduxFrom from './LoginForm/LoginForm'
import { login, logout } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const Login = (props) => {

    if(props.isAuth) {
        return <Navigate to={'/profile/' + props.id}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom login={props.login} logout={props.logout}/>
        </div>

    )
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id
})

export default connect (mapDispatchToProps, {login, logout}) (Login)