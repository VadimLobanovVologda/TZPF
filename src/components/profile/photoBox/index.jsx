import React from 'react';
import styles from './photoBox.scss';
import userSvg from "images/user.svg"

export default () => {
  return (
    <div className={styles.photoBox}>
      <div className="photoBoxContent">
        <img src={userSvg} alt="Фото" />
      </div>
    </div>
  );
};
