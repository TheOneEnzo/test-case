"use client"
import styles from './page.module.css'
import HomePage from '@/components/HomePage'
import DiscoverPage from '@/components/DiscoverPage'
import { useState } from 'react'
import Menu from '@/components/Menu'
import NavigationBar from '@/components/NavigationBar'


export default function Home() {
  let [discover, SetDiscover] = useState(false)
  let [show, setShow] = useState(false)
  
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
    <main className={styles.main}>
      <NavigationBar click={handleClick} />
      {show && (<Menu handleHomePage={changeHomePage} handleDiscovery={changeDiscovery}/>)}
      {discover ? <DiscoverPage /> : <HomePage handleDiscovery={changeDiscovery} state={show}/>}

    </main>
  )
}
