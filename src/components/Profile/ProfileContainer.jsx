import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo, getStatus, updateStatus, uploadPhoto, saveProfile} from '../../redux/profileReducer';
import { useParams } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            
            userId = this.props.authorisedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
            
        }
        this.props.getUserInfo(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
        
    }

    render() {
        //if (this.props.isAuth === false) return <Navigate to={'/login'} />
        return (
            <Profile 
                isOwner={this.props.authorisedUserId}
                saveProfile={this.props.saveProfile}
                isAuth={this.props.isAuth}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}
                uploadPhoto={this.props.uploadPhoto}
                />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    login: state.auth.login
});


export default compose(
    
    //withAuthRedirect,
    connect(mapStateToProps, { getUserInfo, getStatus, updateStatus,  uploadPhoto, saveProfile}),
    withRouter,
    
) (ProfileContainer);
