import React from 'react';
import FriendsItems from './FriendsItems/FriendsItems';
import {connect} from 'react-redux'
import FriendItem from './FriendsItems/FriendItem/FriendItem';


const mapStateToProps = (state) => {
    let panel = state.friendsPanel.friendsList.map(el => (<FriendItem name={el.name} ava={el.ava} key={el.id}/>))
    return {
        Friends : panel
    }
}
const FriendsTab = connect (mapStateToProps) (FriendsItems)



export default FriendsTab;