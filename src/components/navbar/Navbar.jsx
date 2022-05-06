import React, { useState,useContext } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {Link} from 'react-router-dom';
// import logoblanc from '../../assets/Logo Blanc.png';
import './navbar.css';
import { AuthContext } from "../../context/AuthContext";
import {noAvatar} from '../../assets/noAvatar.png';


const Navbar = () => {
  const {user}= useContext(AuthContext)
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState();
  const [search, setSearch] = useState();
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const changeBackgroundSearch = () => {
    if (window.scrollY >= 400) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  window.addEventListener('scroll', changeBackgroundSearch);
   const OutNavbar = () => {
     return (
       <>
       <div className="gpt3__navbar-links">
         <div className={search ? 'gpt3__navbar-links_logos' : 'gpt3__navbar-links_logo'}>
           <h2 className={navbar ? 'cblack' : 'cwhite'}>RCA ENTREPRISE</h2>
         </div>
         <div className={search ? 'gpt3__input' : 'gpt3__input hidesearch'}>
           <input type="text" placeholder="Search" />
           <button className="btn" type="button">Search</button>
         </div>
         {/* <div className={search ? 'Domaines' : 'Domaineshide'}>
           <p>Sante</p>
           <p>Plombier</p>
           <p>Informaticien</p>
           <p>Ingenieure</p>
           <p>Photographiste</p>
           <p>Hopitale</p>
        </div> */}
         <div className={navbar ? 'gpt3__navbar-links_containers' : 'gpt3__navbar-links_container'}>
           <p><a href="#home">Home</a></p>
           <p><a href="#wgpt3">About us</a></p>
           <p><a href="#possibility">Our Services</a></p>
         </div>
       </div>
       <div className={navbar ? 'gpt3__navbar-signs' : 'gpt3__navbar-sign'}>
         <Link to="Login"><p className="signin" >Sign in </p></Link>
         <Link to="Register"><button type="button">Join</button></Link>
       </div>
       <div className="gpt3__navbar-menu">
         {toggleMenu
           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
         {toggleMenu && (
         <div className="gpt3__navbar-menu_container scale-up-center">
           <div className="gpt3__navbar-menu_container-links">
             <p><a href="#home">Home</a></p>
             <p><a href="#wgpt3">About us</a></p>
             <p><a href="#possibility">Our Services</a></p>
           </div>
          <div className="gpt3__navbar-menu_container-links-sign">
             <p>Sign in</p>
             <button type="button">Sign up</button>
           </div>
         </div>
         )}
       </div>
       </>
   );
 }
  const InNavbar = () => {
   return (
     <>
     <div className="gpt3__navbar-links">
       <div className={search ? 'gpt3__navbar-links_logos' : 'gpt3__navbar-links_logo'}>
         <h2 className={navbar ? 'cblack' : 'cwhite'}>RCA ENTREPRISE</h2>
      </div>
       <div className={search ? 'gpt3__input' : 'gpt3__input hidesearch'}>
         <input type="text" placeholder="Search" />
        <button className="btn" type="button">Search</button>
       </div>
       <div className={navbar ? 'gpt3__navbar-links_containers' : 'gpt3__navbar-links_container'}>
         <p><a href="#home">Home</a></p>
         <p><a href="#wgpt3">About us</a></p>
         <p><a href="#possibility">Our Services</a></p>
       </div>
     </div>
     <div className={navbar ? 'gpt3__navbar-signs' : 'gpt3__navbar-sign'}>
       <img src="assets/noAvatar.png" alt="" className="profileImg" />
     </div>
     <div className="gpt3__navbar-menu">
       {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
       {toggleMenu && (
       <div className="gpt3__navbar-menu_container scale-up-center">
         <div className="gpt3__navbar-menu_container-links">
           <p><a href="#home">Home</a></p>
           <p><a href="#wgpt3">About us</a></p>
          <p><a href="#possibility">Our Services</a></p>
         </div>
         <div className="gpt3__navbar-menu_container-links-sign">
           <img src={noAvatar} alt=""
            className="profileImg" />
           <span className="barOnline"></span> 
         </div> 
       </div>
       )}
     </div>
     </>
);
}
  return (
   <div className={navbar ? 'gpt3__navbar active' : 'gpt3__navbar'}>
       {user ? <InNavbar /> : <OutNavbar />}
     </div>
  
 );
  };
 export default Navbar;

