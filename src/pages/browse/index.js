import styles from '@/styles/Home.module.scss';
import Head from 'next/head'
import NavbarPublic from "@/components/NavbarPublic";
import Profile from '@/components/Profile';
import { Icon } from '@iconify/react';
import { useState, useEffect, useRef } from 'react';
import users from '@/data/users';
import movies from '@/data/movies';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProfileId, setactiveProfileId] = useState('');
  const [currentPage, setCurrentPage] = useState('Home')

  function handleactiveProfile(profile) {
    setactiveProfileId(profile)

  }
  const videoRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    videoRef.current = document.getElementById("previewVideo");
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log(entry.isIntersecting)
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        },
        {
          threshold: 0.25
        }
      );

      observer.observe(videoRef.current);

      return () => {
        observer.unobserve(videoRef.current);
      };
    }
  }, []);

  return (
    <>
      <Head>
        {activeProfileId === '' ?
          <title>Dilflix</title>
          : <title>Home - Dilflix</title>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {activeProfileId === ''
        ? <div className={`${styles.chooseProfile} d-flex flex-column justify-content-center align-items-center`}>
          <div className='py-5 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center my-4 mx-1'>Who&apos;s watching&#63;</h1>
            <div >
              <ul className={styles.listProfile}>
                {users.map(user => (
                  <li key={user.id}>
                    <Profile name={user.name} profileChosen={handleactiveProfile} avatar={user.avatar} id={user.id} />
                  </li>
                ))}
                <li>
                  <div className={`${styles.addProfile}`}>
                    <div className={`${styles.addProfileIcon} my-2 d-flex justify-content-center align-items-center`}>
                      <Icon icon="material-symbols:add-circle" className='' />
                    </div>
                    <h6 className='text-center'>Add Profile</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.manageProfile}`}>
            <button>
              Manage Profile
            </button>
          </div>
        </div>
        : <div className={`${styles.browse}`}>
          <NavbarPublic id={activeProfileId} scroll={scrolled} currentPage={currentPage} />
          <main >
            <div className={`${styles.homePreviewContainer}`}>
              <div className={`${styles.content} d-flex justify-content-between align-items-end`}>
                <div className={`${styles.description}`}>
                  <img src={movies[1].titleLogo}></img>
                  <p className={styles.summary}>{movies[1].summary}</p>
                  <div className='d-flex'>
                    <button className={styles.play}>
                      <Icon icon="material-symbols:play-arrow-rounded" className={styles.iconPlay} inline='false' />
                      <span className='me-3'>Play</span>
                    </button>
                    <button className={styles.info}>
                      <Icon icon="material-symbols:info-outline-rounded" className={styles.iconInfo} inline='false' />
                      <span> More Info </span></button>
                  </div>
                </div>
                <div className={styles.rating}>
                  {movies[1].rating}
                </div>
              </div>
              <video id='previewVideo' src={movies[1].preview} poster={movies[1].thumbnail} autoPlay />
              <div className={styles.overlay}></div>
            </div>
          </main>
        </div>}
    </>
  )
}