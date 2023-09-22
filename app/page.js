"use client"
import styles from './page.module.css'
import HomePage from '@/components/HomePage'
import DiscoverPage from '@/components/DiscoverPage'
import { useEffect, useState } from 'react'
import Menu from '@/components/Menu'
import NavigationBar from '@/components/NavigationBar'


export default function Home() {
  let [discover, SetDiscover] = useState(false)
  let [show, setShow] = useState(false)
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  function handleClick() {
    setShow((prevState)=> !prevState) 
   }
  
  function changeDiscovery(){
    SetDiscover(true)
    setShow((prevState)=> false) 

  }

  function changeHomePage(){
    SetDiscover(false)
    setShow((prevState)=> false) 
  }

  
  return (
    <main className={`${styles.main} main`}>
        {windowWidth<=800 && <NavigationBar click={handleClick} />}
        {show && (<Menu handleHomePage={changeHomePage} handleDiscovery={changeDiscovery} width={windowWidth}/>)}
        {discover ? <DiscoverPage /> : <HomePage handleDiscovery={changeDiscovery} state={show}/>}
    </main>
  )
}
