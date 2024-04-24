'use client'
import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobaProvider';

function Nav() {
  const {modelHandler} = useContext(GlobalContext)

  const modelHandle =()=>{
    modelHandler()

  }
  return (
    <nav className='d-flex justify-content-between px-5 py-2 border-bottom align-center' style={{height:'70px',alignItems:'center'}}>
        <input type='text' placeholder='Search...' className='px-3' style={{border:'solid 1px #d3cfcf',borderColor:'#d3cfcf',borderRadius:20,width:'25%',height:'40px'}}/>
       <h3>Next Blog</h3>
       <FontAwesomeIcon icon={faBars} style={{height:'30px',width:'40px',cursor:'pointer'}} onClick={modelHandle}/>
       </nav>
  )
}

export default Nav
