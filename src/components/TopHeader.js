import React from 'react';
import styles from './TopHeader.module.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <span>📞1800 570 1989</span>
        <span>✉️ info@urbandot.in</span>
      </div>
      <div className={styles.right}>
        <a href="https://www.facebook.com/urbandotlogistics/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com/urbandotIN" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/urbandot_couriers_cargo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/urbandot-couriers-and-cargo-350130339/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default TopHeader;
