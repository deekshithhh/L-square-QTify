import React from 'react';
import styles from  '../Navbar/navbar.module.css'
import AppLogo from '../Logo/Logo';
import NavSearch from '../Search/Search';
import FeedBackButton from '../Button/Button';

export default function MyNavbar() {
  return (
    <nav class="navbar" className={styles.navbar}>
      <a href="/"><AppLogo/></a>
      <NavSearch placeholdertext="Search for a album of your choice"/>
      <FeedBackButton text="Give Feedback"/>
    </nav>
  );
};
