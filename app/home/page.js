'use client'
import React, { useContext } from 'react'
import Hero from '../components/hero'
import Post from '../components/posts'
import Sidebar from '../components/sidebar'
import { GlobalContext } from '../context/GlobaProvider'

function HomePage() {
  const {model} = useContext(GlobalContext)
  return (
    <div>
      <Hero/>
      <Post/>
      {model && <Sidebar/>}
    </div>
  )
}

export default HomePage
