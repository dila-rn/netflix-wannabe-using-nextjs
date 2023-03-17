import styles from '@/styles/Home.module.scss';
import Head from 'next/head'
import NavbarPublic from "@/components/NavbarPublic";
import Profile from '@/components/Profile';
import users from '@/data/users';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';


export default function Home() {
  const [profileChosen, setprofileChosen] = useState('');

  function handleProfileChosen(profile) {
    setprofileChosen(profile)
  }

  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log(scrolled)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <Head>
        <title>Home - Dilflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {profileChosen === ''
        ? <div className={`${styles.chooseProfile} d-flex flex-column justify-content-center align-items-center`}>
          <div className='py-5 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-center my-4 mx-1'>Who's watching?</h1>
            <div >
              <ul className={styles.listProfile}>
                {users.map(user => (
                  <li key={user.id}>
                    <Profile name={user.name} profileChosen={handleProfileChosen} />
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
          <NavbarPublic name={profileChosen} scroll={scrolled}/>
          <main className={`mx-5`}>
          pilih moviee
          </main>
          
        </div>}




    </>
  )
}