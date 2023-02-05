import React from 'react'
import { connect } from 'react-redux'
import LoginFrom from './LoginForm/LoginForm'
import { login} from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'
import styles from './Login.module.css'

const Login = (props) => {

    if(props.isAuth) {
        return <Navigate to={'/profile/' + props.id}/>
    }
    return (
        <div className={styles.loginForm}>
            <h1 className={styles.header}>Account Login</h1>
            <LoginFrom login={props.login} errorMessage={props.errorMessage} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    errorMessage : state.auth.errorMessage,
    captchaUrl : state.auth.captchaUrl
})

export default connect (mapDispatchToProps, {login}) (Login)