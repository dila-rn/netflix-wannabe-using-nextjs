import styles from '@/styles/Navbar.module.scss'
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import users from '@/data/users';

export default function NavbarPublic(props) {

  const [avatarUrl, setavatarUrl] = useState()
  const userId = props.id;

  useEffect(() => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setavatarUrl(user.avatar);
    } else {
      console.log(`User with id ${userId} not found`);
    }
  }, []);


  const [activeLink, setactiveLink] = useState('Home');
  const [activeUser, setActiveUser] = useState(props.user)
  const router = useRouter();

  function handleHome() {
    setactiveLink(props.currentPage)
    router.push('/browse')
  }

  function handleTVShow() {
    setactiveLink(props.currentPage)
    router.push('/browse/genre/1')
  }

  function handleMovies() {
    setactiveLink(props.currentPage)
    router.push('/browse/genre/2')
  }

  function handleNews() {
    setactiveLink(props.currentPage)
    router.push('/latest')

  }

  function handleMyList() {
    setactiveLink(props.currentPage)
    router.push('/browse/my-list')
  }

  function handleAudio() {
    setactiveLink(props.currentPage)
    router.push('/browse/original-audio')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant='dark' className={props.scroll ? `${styles.navbarContainer}  ${styles.scrolled} px-5 d-flex align-items-center justify-content-between fixed-top` : `${styles.navbarContainer} px-5 d-flex align-items-center justify-content-between fixed-top`}>

        <div className={`d-flex align-items-center`} >
          <Navbar.Brand href="" className={`${styles.logo} me-4 fw-bold`}>DILFLIX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.nav} ms-0`}>
              {props.currentPage == 'Home'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>Home</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleHome}>Home</Nav.Link>
              }

              {props.currentPage == 'TVShow'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>TV Show</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleTVShow}>TV Show</Nav.Link>
              }

              {props.currentPage == 'Movies'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>Movies</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleMovies}>Movies</Nav.Link>
              }

              {props.currentPage == 'News'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>News & Popular</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleNews}>News & Popular</Nav.Link>
              }

              {props.currentPage == 'MyList'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>My List</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleMyList}>My List</Nav.Link>
              }

              {props.currentPage == 'Audio'
                ? <Nav.Link disabled className={styles.navLink} style={{ fontWeight: '500', color: 'white' }}>Browse by Language</Nav.Link>
                : <Nav.Link className={styles.navLink} onClick={handleAudio}>Browse by Language</Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </div>

        <div className={`${styles.navElement} d-flex align-items-center`}>
          <a href="#home"><Icon icon="ic:baseline-search" width="24" height="24" /></a>
          <a href="#kids">Kids</a>
          <a href="#browseByLanguage"><Icon icon="mdi:bell-outline" width="24" height="24" /></a>
          <button className='d-flex align-items-center'>
            <span className={styles.profileIcon}>
              <img src={avatarUrl} alt="" />
            </span>
            <span className={styles.triangle}></span>
          </button>
        </div>

      </Navbar>
    </>
  )
}