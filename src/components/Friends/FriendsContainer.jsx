import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestFriends } from '../../redux/friendsReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Friends from './Friends';
import Preloader from '../Common/Preloader/Preloader';

class FriendsContainer extends Component {
    
    componentDidMount () {
        this.props.requestFriends();
    }

    componentDidUpdate () {
        this.props.requestFriends();
    }
    
    render() {
        return (
            <>
                {/* {!this.props.isFetching ? <Preloader /> : null} */}
                <Friends {...this.props}/>
            </>   
        );
    }
}

let mapStateToProps = (state) => ({
    users: state.friendsPage.users,
    isFetching: state.friendsPage.isFetching
})

export default compose(
    withAuthRedirect, 
    connect( mapStateToProps, {requestFriends})
    )(FriendsContainer);

