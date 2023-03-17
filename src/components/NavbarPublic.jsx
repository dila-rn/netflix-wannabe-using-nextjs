import styles from '@/styles/Navbar.module.scss'
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function NavbarPublic(props) {

  
  return (
    <>
    
      <Navbar collapseOnSelect expand="md" variant='dark' className={ props.scroll ? `${styles.navbarContainer}  ${styles.scrolled} px-5 d-flex align-items-center justify-content-between fixed-top` : `${styles.navbarContainer} px-5 d-flex align-items-center justify-content-between fixed-top`}>

        <div className={`d-flex align-items-center`} >
          <Navbar.Brand href="" className={`${styles.logo} me-4 fw-bold`}>DILFLIX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.nav} ms-0`}>
              <Nav.Link className={styles.navLink} href="#home">Home</Nav.Link>
              <Nav.Link className={styles.navLink} href="#tvShows">TV Shows</Nav.Link>
              <Nav.Link className={styles.navLink} href="#movies">Movies</Nav.Link>
              <Nav.Link className={styles.navLink} href="#newsPopular">News & Popular</Nav.Link>
              <Nav.Link className={styles.navLink} href="#myList">My List</Nav.Link>
              <Nav.Link className={styles.navLink} href="#browseByLanguage">Browse by Language</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className={`${styles.navElement} d-flex align-items-center`}>
          <a href="#home"><Icon icon="ic:baseline-search" width="24" height="24" /></a>
          <a href="#kids">Kids</a>
          <a href="#browseByLanguage"><Icon icon="mdi:bell-outline" width="24" height="24" /></a>
          <button className='d-flex align-items-center'>
            <span className={styles.profileIcon}></span>
            <span className={styles.triangle}></span>
          </button>          
        </div>

      </Navbar>
    </>
  )
}