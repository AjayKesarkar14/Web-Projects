import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <>
         <nav className='NavBar'>
         
         <h1 className='before-back'>logo</h1>
         <main className='nav-main'>
          <HashLink to={"/#home"} >Home </HashLink>
          <HashLink to={"/#about"} >About </HashLink>
          <Link to={"/contact"} >Contact </Link>
          <HashLink to={"/#srvices"} >Services </HashLink>
</main>
        
        </nav> 
    </>
  );
}

export default Header
