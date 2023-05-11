import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestFriends } from '../../redux/friendsReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Friends from './Friends';

class FriendsContainer extends Component {
  componentDidMount() {
    this.props.requestFriends();
  }

  componentDidUpdate() {
    this.props.requestFriends();
  }

  render() {
    return <Friends {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  users: state.friendsPage.users,
  isFetching: state.friendsPage.isFetching,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { requestFriends })
)(FriendsContainer);
