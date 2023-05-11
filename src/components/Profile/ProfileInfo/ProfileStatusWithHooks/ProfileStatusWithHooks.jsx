import React, { useEffect, useState } from 'react';
import styles from './ProfileStatusWithHooks.module.css';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={styles.statusContainer}>
      <div className={styles.statusHeader}>Status</div>
      {!editMode ? (
        <div>
          <div
            onDoubleClick={activateEditMode}
            className={styles.statusInner}
            data-tooltip="DoubleClick to change"
          >
            {status || (
              <div className={styles.statusEmpty}>
                My current status in unknown...
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={status}
            className={styles.statusInput}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
