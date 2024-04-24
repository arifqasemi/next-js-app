'use client'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobaProvider';

function Sidebar() {

    const ctx = useContext(GlobalContext)

    const openModel =()=>{
        ctx.modelHandler()
    }
  return (
    <div style={{position:'fixed',top:0,right:0,height:'100vh',backgroundColor:'white',width:'300px',zIndex:100,paddingLeft:20,paddingTop:10}} className='sidebar'>
      <div><FontAwesomeIcon icon={faX} style={{height:20,width:20,cursor:'pointer'}} onClick={openModel}/></div>
      <div className='d-flex flex-column mt-5 gap-1'>
        <a href='/home' style={{textDecoration:'none',color:'black',hover:{color:'yellow'}}}>Home</a>
        <a href='/post/travel' style={{textDecoration:'none',color:'black',hover:{color:'yellow'}}}>Travel</a>
        <a href='/post/food' style={{textDecoration:'none',color:'black',hover:{color:'yellow'}}}>Food</a>
        <a href='/post/business' style={{textDecoration:'none',color:'black',hover:{color:'yellow'}}}>Business</a>
        <a href='/post/technology' style={{textDecoration:'none',color:'black',hover:{color:'yellow'}}}>Technology</a>
      </div>
    </div>
  )
}

export default Sidebar
