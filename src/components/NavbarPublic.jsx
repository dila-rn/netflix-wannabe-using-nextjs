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
      <Navbar collapseOnSelect expand="md" variant='dark' className={`${styles.navbarContainer} d-flex align-items-center justify-content-between fixed-top ${props.scroll && styles.scrolled}`}
>
        <div className={`d-flex align-items-center`} >
        <Navbar.Toggle aria-controls="navbarPrimaryElement" className='me-3 my-3'/>
          <Navbar.Brand href="/" className= "me-4">
            <img src="/static/images/dilflix.png" alt="dilflix-logo" className={`${styles.logo}`} />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarPrimaryElement">
            <Nav className={`${styles.nav}`}>
              <a  className={`${styles.primaryElement}`} onClick={handleHome} aria-disabled={props.currentPage === 'Home'}>Home</a>
              <a  className={`${styles.primaryElement}`} onClick={handleTVShow} aria-disabled={props.currentPage === 'TVShow'}>TV Show</a>
              <a  className={`${styles.primaryElement}`} onClick={handleMovies} aria-disabled={props.currentPage === 'Movies'}>Movies</a>
              <a  className={`${styles.primaryElement}`} onClick={handleNews} aria-disabled={props.currentPage === 'News'}>News & Popular</a>
              <a  className={`${styles.primaryElement}`} onClick={handleMyList} aria-disabled={props.currentPage === 'MyList'}>My List</a>
              <a  className={`${styles.primaryElement}`} onClick={handleAudio} aria-disabled={props.currentPage === 'Audio'}>Browse by Language</a>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className={`${styles.secondaryElement} d-flex align-items-center`}>
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