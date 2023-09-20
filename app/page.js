"use client"
import styles from './page.module.css'
import HomePage from '@/components/HomePage'
import DiscoverPage from '@/components/DiscoverPage'
import { useState } from 'react'
import NavigationBar from '@/components/NavigationBar'


export default function Home() {
  let [discover, SetDiscover] = useState(false)
  let [show, setShow] = useState(false)
  
  function handleClick() {
    setShow((prevState)=> !prevState) 
   }
  
  function changeDiscovery(){
    SetDiscover(prevstate => !prevstate)
  }

  return (
    <main className={styles.main}>
    <NavigationBar click={handleClick} />
    {discover ? <DiscoverPage /> : <HomePage handleDiscovery={changeDiscovery} state={show}/>}

    </main>
  )
}
