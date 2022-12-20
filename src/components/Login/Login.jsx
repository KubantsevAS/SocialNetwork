import React from 'react'
import { connect } from 'react-redux'
import LoginFrom from './LoginForm/LoginForm'
import { login} from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const Login = (props) => {

    if(props.isAuth) {
        return <Navigate to={'/profile/' + props.id}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginFrom login={props.login} errorMessage={props.errorMessage}/>
        </div>

    )
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    errorMessage : state.auth.errorMessage
})

export default connect (mapDispatchToProps, {login}) (Login)