import React from 'react';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
            
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode 
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>

                : <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}></input>
                </div>}
            </>
        )

    }
}

export default ProfileStatus;
