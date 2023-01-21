import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../../redux/authReducer'
import styles from './LogoutTab.module.css'
import logoutImg from '../../../redux/images/icons/logout.png'

class LogoutTab extends React.Component {
    render () {
        return (
            <div>
                { this.props.isAuth && 
                    <div className={styles.logoutTab}>
                        <img alt={'icon'} src={logoutImg} className={styles.lgImg}></img>
                        <label htmlFor='btn' className={styles.text}>Log out</label>
                        <button id='btn' onClick={this.props.logout} className={styles.btn}></button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {logout})(LogoutTab);
