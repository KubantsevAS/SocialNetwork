import React, { useState } from 'react';


const ProfileStatusWithHooks = (props) => {


let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

const activateEditMode = () => {
    setEditMode(true);
}
const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}

const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
}


    return (
        <>
            {!editMode
                ? <div>
                    Status: <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
                </div>

                : <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status}></input>
                </div>}
        </>
    )
}

export default ProfileStatusWithHooks