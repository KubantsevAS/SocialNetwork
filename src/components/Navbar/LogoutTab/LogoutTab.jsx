import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/authReducer.ts';
import styles from './LogoutTab.module.css';
import logoutImg from '../../../redux/images/icons/logout.png';

class LogoutTab extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuth && (
          <label htmlFor="btn" className={styles.logoutTab}>
            <img alt={'icon'} src={logoutImg} className={styles.lgImg}></img>
            <div className={styles.text}>Log out</div>
            <button
              id="btn"
              onClick={this.props.logout}
              className={styles.btn}
            ></button>
          </label>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { logout })(LogoutTab);
