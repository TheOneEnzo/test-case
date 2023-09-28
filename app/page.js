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

  // GETS WINDOW WIDTH
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
    document.querySelector(".bottomSpan").style.fontWeight = "bold"
    document.querySelector(".bottomSpan").style.opacity = "100%"
    document.querySelector(".topSpan").style.fontWeight = ""
    document.querySelector(".topSpan").style.opacity = "50%"
    if (windowWidth<=800) {
      setShow((prevState)=> false)       
    }

  }

  function changeHomePage(){
    SetDiscover(false)
    document.querySelector(".topSpan").style.fontWeight = "bold"
    document.querySelector(".topSpan").style.opacity = "100%"
    document.querySelector(".bottomSpan").style.fontWeight = ""
    document.querySelector(".bottomSpan").style.opacity = "50%"
    if (windowWidth<=800) {
      setShow((prevState)=> false)       
    }
  }

  useEffect(()=>{
    if (windowWidth >= 800) {
      setShow(true)
    }
    else{
      setShow(false)
    }

  }, [windowWidth])

  return (
    <main className={`${styles.main} main`}>
        {windowWidth<=800 && <NavigationBar click={handleClick} />}
        {show && (<Menu handleHomePage={changeHomePage} handleDiscovery={changeDiscovery} width={windowWidth}/>)}
        {discover ? <DiscoverPage /> : <HomePage handleDiscovery={changeDiscovery} state={show}/>}
    </main>
  )
}