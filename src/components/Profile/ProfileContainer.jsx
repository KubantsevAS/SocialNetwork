import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo, getStatus, updateStatus} from '../../redux/profileReducer';
import { useParams, Navigate } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        if (!userId) {
            
            userId = this.props.authorisedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
            
        }
        this.props.getUserInfo(userId);
        this.props.getStatus(userId);
    }

    render() {
        //if (this.props.isAuth === false) return <Navigate to={'/login'} />
        return (
            <Profile isAuth={this.props.isAuth}
                userId={this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});


export default compose(
    
    //withAuthRedirect,
    connect(mapStateToProps, { getUserInfo, getStatus, updateStatus }),
    withRouter,
    
) (ProfileContainer);
