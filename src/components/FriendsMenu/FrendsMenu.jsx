import React from 'react';
import FriendsItems from './FriendsItems/FriendsItems';
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        friendsList: state.friendsPanel.friendsList
    }
}
const FriendsMenu = connect (mapStateToProps) (FriendsItems)



export default FriendsMenu;