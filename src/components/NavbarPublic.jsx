import styles from '@/styles/Navbar.module.scss'
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import users from '@/data/users';

export default function NavbarPublic(props) {

  const [avatarUrl, setavatarUrl] = useState()
  const [activeProfileId, setactiveProfileId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('USER_PROFILE')) {
      router.push('/browse');
    }

    let userProfile = parseInt(sessionStorage.getItem('USER_PROFILE'));
    if (userProfile) {
      setactiveProfileId(userProfile)
    }

    const user = users.find(u => u.id === userProfile);
    if (user) {
      setavatarUrl(user.avatar);
    } else {
      console.log(`User with id ${userProfile} not found`);
    }

    if (typeof window !== 'undefined') {
      window.onunload = function () {
        sessionStorage.removeItem('USER_PROFILE');
      }
    }
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const router = useRouter();

  function handleHome() {
    router.push('/browse')
  }

  function handleTVShow() {
    router.push('/browse/genre/1')
  }

  function handleMovies() {
    router.push('/browse/genre/2')
  }

  function handleNews() {
    router.push('/latest')
  }

  function handleMyList() {
    router.push('/browse/my-list')
  }

  function handleAudio() {
    router.push('/browse/original-audio')
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant='dark' className={`${styles.navbarContainer} d-flex align-items-center justify-content-between fixed-top ${scrolled && styles.scrolled}`}
      >
        <div className={`d-flex align-items-center`} >
          <Navbar.Toggle aria-controls="navbarPrimaryElement" className='me-3 my-3' />
          <Navbar.Brand href="/" className="me-4">
            <img src="/static/images/dilflix.png" alt="dilflix-logo" className={`${styles.logo}`} />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarPrimaryElement">
            <Nav className={`${styles.nav}`}>
              <a className={`${styles.primaryElement}`} onClick={handleHome} aria-disabled={props.currentPage === 'Home'}>Home</a>
              <a className={`${styles.primaryElement}`} onClick={handleTVShow} aria-disabled={props.currentPage === 'TVShow'}>TV Show</a>
              <a className={`${styles.primaryElement}`} onClick={handleMovies} aria-disabled={props.currentPage === 'Movies'}>Movies</a>
              <a className={`${styles.primaryElement}`} onClick={handleNews} aria-disabled={props.currentPage === 'News'}>News & Popular</a>
              <a className={`${styles.primaryElement}`} onClick={handleMyList} aria-disabled={props.currentPage === 'MyList'}>My List</a>
              <a className={`${styles.primaryElement}`} onClick={handleAudio} aria-disabled={props.currentPage === 'Audio'}>Browse by Language</a>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div className={`${styles.secondaryElement}`}>
          <div className=' d-flex align-items-center'>
            <a href="#home"><Icon icon="ic:baseline-search" width="24" height="24" /></a>
            <a href="#kids">Kids</a>
            <a href="#notification"><Icon icon="mdi:bell-outline" width="24" height="24" /></a>
            <button className='d-flex align-items-center'>
              <span className={styles.profileIcon}>
                <img src={avatarUrl} alt="" />
              </span>
              <span className={styles.triangle}></span>
            </button>
          </div>
        </div>

        <div className={`${styles.secondaryElementSmall}`}>
          <div className=' d-flex align-items-center'>
            <a href="#home"><Icon icon="ic:baseline-search" width="24" height="24" /></a>
            <button className='d-flex align-items-center'>
              <span className={styles.profileIcon}>
                <img src={avatarUrl} alt="" />
              </span>
              <span className={styles.triangle}></span>
            </button>
          </div>
        </div>

      </Navbar>
    </>
  )
}